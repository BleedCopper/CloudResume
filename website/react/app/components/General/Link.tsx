interface IProps {
  children: React.ReactNode;
  href: string;
  icon: string;
}
export const LinkComponent = ({ children, href, icon }: IProps) => {
  return (
    <div className="inline-block space-x-1 group/link">
      <div className="inline-block text-text group-hover/link:text-accent">
        <i className={"fa-brands " + icon}></i>
      </div>
      <a
        href={href}
        target="_blank"
        className="underline group-hover/link:text-accent"
      >
        {children}
      </a>
    </div>
  );
};
