interface IProps {
  children: React.ReactNode;
}
export const SectionHeader = ({ children }: IProps) => {
  return (
    <div className="z-50 -mx-5 px-5 sticky top-0 left-0 backdrop-blur py-3 md:relative md:py-0">
      <h4 className="uppercase">{children}</h4>
    </div>
  );
};
