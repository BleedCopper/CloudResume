"use client";
import { useEffect, useState } from "react";
import { Button } from "../components/General/Button";
import { Socials } from "../components/Socials";
import { Resume } from "../models/resume";
import { Settings } from "../models/settings";
import mySettings from "../../public/settings.json";
import { fetchCounter } from "../api/counter";

interface IProps {
  data: Resume;
}
export const LandingPage = ({ data }: IProps) => {
  const settings: Settings = mySettings;
  const [counter, setCounter] = useState<number | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      fetchCounter().then((data) => {
        setCounter(data.count);
      });
    };
    fetchData();
  });
  return (
    <div className="pt-24 md:flex md:pb-12 md:sticky md:top-0 md:left-12 lg:left-24 md:h-screen">
      <div className="space-y-7 md:flex md:flex-col md:content-between">
        <div className="space-y-10 md:flex-grow">
          <div className="space-y-3">
            <div className="space-y-1">
              <h1>{data.name}</h1>
              <h2>{data.jobTitle}</h2>
            </div>
            <h3 className="font-light opacity-80">
              I design solutions and develop experiences
            </h3>
          </div>
          <Button
            className="hidden md:inline-block"
            href={"mailto:" + data.social.mail}
          >
            Contact Me
          </Button>
        </div>
        <div className="space-y-0.5">
          <Socials data={data} />
          {!settings.disableViewCount && (
            <div className="flex w-full fixed bottom-0 left-0 py-3 justify-center bg-primary z-50 md:bg-opacity-0 md:justify-normal md:relative">
              <span className="text-text-lighter">
                This site has been viewed{" "}
                {counter && (
                  <span className="font-semibold" data-testid="viewCount">
                    {counter}
                  </span>
                )}{" "}
                times
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
