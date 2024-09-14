import { Education } from "../models/resume";
import { CardListDetails } from "./General/CardListDetails";
import { DateCard } from "./General/DateCard";

interface IProps {
  data: Education;
}
export const EducationCard = ({ data }: IProps) => {
  return (
    <DateCard
      href={data.link}
      preview={data.duration}
      body={<CardListDetails data={data.description} />}
      title={data.title + " · " + data.school}
    />
  );
};
