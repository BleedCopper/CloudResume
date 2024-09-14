interface IProps {
  children: React.ReactNode;
}
export const Tag = ({ children }: IProps) => {
  return (
    <div className="bg-accent-darker rounded-full px-2.5 py-1 inline-block text-xs">
      <span className="text-accent text-xs font-medium">{children}</span>
    </div>
  );
};
