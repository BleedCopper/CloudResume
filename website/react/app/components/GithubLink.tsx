import { LinkComponent } from "./General/Link";

interface IProps {
  href?: string;
}
export const GithubLink = ({ href }: IProps) => {
  return (
    <LinkComponent href={href ?? ""} icon="fa-github">
      Github
    </LinkComponent>
  );
};
