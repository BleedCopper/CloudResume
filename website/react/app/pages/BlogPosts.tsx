import { BaseSection } from "../components/BaseSection";
import { BlogPostCard } from "../components/BlogPostCard";
import { BlogPost } from "../models/resume";

interface IProps {
  data: BlogPost[];
}
export const BlogPosts = ({ data }: IProps) => {
  return (
    <BaseSection title="Blog">
      {data.map((post, i) => (
        <BlogPostCard key={i} data={post} />
      ))}
    </BaseSection>
  );
};
