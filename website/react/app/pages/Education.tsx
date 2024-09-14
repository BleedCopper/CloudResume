import { BaseSection } from "../components/BaseSection";
import { EducationCard } from "../components/EducationCard";
import { Education as EducationItem } from "../models/resume";

interface IProps {
  data: EducationItem[];
}
export const Education = ({ data }: IProps) => {
  return (
    <BaseSection title="Education">
      {data.map((education, i) => (
        <EducationCard key={i} data={education} />
      ))}
    </BaseSection>
  );
};
