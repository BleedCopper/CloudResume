import { BaseSection } from "../components/BaseSection";
import { ProjectCard } from "../components/ProjectCard";
import { Project } from "../models/resume";

interface IProps {
  data: Project[];
}
export const Projects = ({ data }: IProps) => {
  return (
    <BaseSection title="Projects">
      {data.map((project, i) => (
        <ProjectCard key={i} data={project} />
      ))}
    </BaseSection>
  );
};
