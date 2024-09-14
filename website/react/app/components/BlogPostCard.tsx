"use client";
import { useEffect, useState } from "react";
import { BlogPost } from "../models/resume";
import { CardTextDetails } from "./General/CardTextDetails";
import { PhotoCard } from "./General/PhotoCard";
import { TagList } from "./TagList";

interface IProps {
  data: BlogPost;
}
export const BlogPostCard = ({ data }: IProps) => {
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    const baseUrl = window.location.origin;
    const imageUrl = new URL(baseUrl + "/" + data.photo, import.meta.url).href;
    setImageUrl(imageUrl);
  });
  return (
    <PhotoCard
      href={data.link}
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
        </>
      }
      title={data.title}
    ></PhotoCard>
  );
};
