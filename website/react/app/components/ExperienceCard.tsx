import { Experience } from "../models/resume";
import { CardListDetails } from "./General/CardListDetails";
import { DateCard } from "./General/DateCard";
import { TagList } from "./TagList";

interface IProps {
  data: Experience;
}
export const ExperienceCard = ({ data }: IProps) => {
  return (
    <DateCard
      href={data.link}
      title={data.title + " · " + data.company}
      preview={data.duration}
      body={
        <>
          <CardListDetails data={data.description} />
          <TagList tags={data.tags} />
        </>
      }
    />
  );
};
