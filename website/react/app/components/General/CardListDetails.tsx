interface IProps {
  data: string[];
}
export const CardListDetails = ({ data }: IProps) => {
  return (
    <ul className="list-disc pl-3.5 opacity-80">
      {data.map((desc, i) => {
        return <li key={i}>{desc}</li>;
      })}
    </ul>
  );
};
