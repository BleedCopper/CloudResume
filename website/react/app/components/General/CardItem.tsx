"use client";
import { Card } from "./Card";

interface IProps {
  preview: React.ReactNode;
  title: React.ReactNode;
  body: React.ReactNode;
  href: string;
}

export const CardItem = ({ preview, title, body, href }: IProps) => {
  return (
    <Card className="group/card">
      <div
        onClick={(e) => {
          e.stopPropagation();
          window.open(href, "_blank")?.focus();
        }}
        style={{ cursor: "pointer" }}
      >
        <div className="grid sm:grid-cols-5 sm:gap-4">
          <div className="mt-1">{preview}</div>
          <div className="sm:col-span-4">
            <h3 className="group-hover/card:text-accent font-medium">
              {title}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/card:-translate-y-1 group-hover/card:translate-x-1 motion-reduce:transition-none"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </h3>
            <div className="pt-1 pb-0.5 space-y-3">{body}</div>
          </div>
        </div>
      </div>
    </Card>
  );
};
