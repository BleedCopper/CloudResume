import { Resume } from "../models/resume";

interface IProps {
  data: Resume;
}
export const Socials = ({ data }: IProps) => {
  return (
    <div className="space-x-4">
      {data.social.mail && (
        <a href={"mailto:" + data.social.mail} className="hover:text-accent">
          <i className="fa-regular fa-envelope fa-xl"></i>
        </a>
      )}
      {data.social.github && (
        <a
          href={data.social.github}
          className="hover:text-accent"
          target="_blank"
        >
          <i className="fa-brands fa-github fa-xl"></i>
        </a>
      )}
      {data.social.linkedin && (
        <a
          href={data.social.linkedin}
          className="hover:text-accent"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin-in fa-xl"></i>
        </a>
      )}
    </div>
  );
};
