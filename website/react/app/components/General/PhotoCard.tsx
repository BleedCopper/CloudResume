import { CardItem } from "./CardItem";

interface IProps {
  preview: React.ReactNode;
  title: React.ReactNode;
  body: React.ReactNode;
  href: string;
}
export const PhotoCard = ({ preview, title, body, href }: IProps) => {
  return (
    <CardItem
      href={href}
      title={title}
      preview={
        <div className="flex place-content-center">
          <div className="max-w-32">{preview}</div>
        </div>
      }
      body={body}
    />
  );
};
