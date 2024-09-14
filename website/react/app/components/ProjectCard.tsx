"use client";
import { useEffect, useState } from "react";
import { Project } from "../models/resume";
import { FigmaLink } from "./FigmaLink";
import { CardTextDetails } from "./General/CardTextDetails";
import { PhotoCard } from "./General/PhotoCard";
import { GithubLink } from "./GithubLink";
import { TagList } from "./TagList";

interface IProps {
  data: Project;
}
export const ProjectCard = ({ data }: IProps) => {
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    const baseUrl = window.location.origin;
    const imageUrl = new URL(baseUrl + "/" + data.photo, import.meta.url).href;
    setImageUrl(imageUrl);
  });
  return (
    <PhotoCard
      href={data.link}
      title={data.title}
      preview={
        <div className="flex place-content-center">
          <div className="max-w-32 mb-3">
            <img
              src={imageUrl}
              className="rounded-md border-2 border-accent-darker"
            />
          </div>
        </div>
      }
      body={
        <>
          <CardTextDetails data={data.description} />
          <TagList tags={data.tags} />
          <div className="space-x-2.5">
            {data.figma && <FigmaLink href={data.figma} />}
            {data.github && <GithubLink href={data.github} />}
          </div>
        </>
      }
    ></PhotoCard>
  );
};
