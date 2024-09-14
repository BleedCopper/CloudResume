import { CardItem } from "./CardItem";

interface IProps {
  preview: React.ReactNode;
  title: React.ReactNode;
  body: React.ReactNode;
  href: string;
}
export const DateCard = ({ preview, title, body, href }: IProps) => {
  return (
    <CardItem
      href={href}
      title={title}
      preview={
        <p className="text-xs text-text opacity-50 uppercase font-semibold">
          {preview}
        </p>
      }
      body={body}
    />
  );
};
