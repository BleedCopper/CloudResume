interface IProps {
  data: string[];
}
export const CardTextDetails = ({ data }: IProps) => {
  return (
    <>
      {data.map((desc, i) => {
        return (
          <p key={i} className="opacity-80">
            {desc}
          </p>
        );
      })}
    </>
  );
};
