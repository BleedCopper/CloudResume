import { BaseSection } from "../components/BaseSection";
import { ExperienceCard } from "../components/ExperienceCard";
import { Experience as ExperienceItem } from "../models/resume";

interface IProps {
  data: ExperienceItem[];
}
export const Experience = ({ data }: IProps) => {
  return (
    <BaseSection title="Experience">
      {data.map((experience, i) => (
        <ExperienceCard key={i} data={experience} />
      ))}
    </BaseSection>
  );
};
