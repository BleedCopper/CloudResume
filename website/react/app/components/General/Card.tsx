interface IProps {
  children: React.ReactNode;
  className: string;
}

export const Card = ({ className, children }: IProps) => {
  return (
    <div
      className={
        className + " px-2.5 pt-2 pb-3 rounded-md hover:bg-primary-lighter"
      }
    >
      {children}
    </div>
  );
};
