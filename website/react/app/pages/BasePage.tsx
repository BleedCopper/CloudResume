import React from "react";
import myFile from "../../public/resume.json";
import { Resume } from "../models/resume";
import { BlogPosts } from "./BlogPosts";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { LandingPage } from "./LandingPage";
import { Projects } from "./Projects";

export function BasePage() {
  const myResume: Resume = myFile;
  return (
    <div className="grid px-5 gap-12 md:px-8 lg:px-12 md:grid-cols-2 md:gap-5">
      <LandingPage data={myResume} />
      <div className="container space-y-5 pt-3 pb-12 md:pt-12">
        {myResume.experience && (
          <div className="container">
            <Experience data={myResume.experience} />
          </div>
        )}
        {myResume.education && (
          <div className="container">
            <Education data={myResume.education} />
          </div>
        )}
        {myResume.projects && (
          <div className="container">
            <Projects data={myResume.projects} />
          </div>
        )}
        {myResume.blogPosts && (
          <div className="container">
            <BlogPosts data={myResume.blogPosts} />
          </div>
        )}
      </div>
    </div>
  );
}
