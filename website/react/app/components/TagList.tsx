import { Tag } from "./General/Tag";

interface IProps {
  tags: string[] | undefined;
}
export const TagList = ({ tags }: IProps) => {
  return tags ? (
    <div className="container space-x-1 space-y-1">
      {tags.map((tag, i) => (
        <Tag key={i}>{tag}</Tag>
      ))}
    </div>
  ) : null;
};
