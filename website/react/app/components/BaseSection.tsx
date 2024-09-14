import { SectionHeader } from "./General/SectionHeader";

interface IProps {
  children: React.ReactNode;
  title: string;
}
export const BaseSection = ({ children, title }: IProps) => {
  return (
    <div className="container flex-row space-y-1">
      <SectionHeader>{title}</SectionHeader>
      <div className="space-y-2">{children}</div>
    </div>
  );
};
