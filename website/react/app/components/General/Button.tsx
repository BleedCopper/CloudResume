interface IProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}
export const Button = ({ children, className, href }: IProps) => {
  return (
    <a
      className={
        className +
        " inline-block text-accent border-accent border rounded-md px-1.5 py-1 hover:bg-accent-darker"
      }
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
};
