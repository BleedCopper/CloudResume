import { LinkComponent } from "./General/Link";

interface IProps {
  href?: string;
}
export const FigmaLink = ({ href }: IProps) => {
  return (
    <LinkComponent href={href ?? ""} icon="fa-figma">
      Figma
    </LinkComponent>
  );
};
