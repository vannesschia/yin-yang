import { Link } from "react-router-dom";

export default function ListItem({
  mainText,
  subText,
  rightText,
  link = "",
}: {
  mainText?: string;
  subText?: string;
  rightText?: string;
  link?: string;
}) {
  const isExternal = link.startsWith("http");

  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    isExternal ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {children}
      </a>
    ) : (
      <Link to={link || "#"}>{children}</Link>
    );

  return (
    <Wrapper>
      <p
        className={`transition-700 flex flex-row items-center md:items-baseline-last ${
          link
            ? "cursor-pointer hover:bg-[#E1E1E1] dark:hover:bg-[#2A2A2A]"
            : "cursor-default"
        }`}
      >
        <div className="flex flex-col md:flex-row gap-0.5 md:gap-1 md:items-baseline">
          <span className="text-theme font-sans text-base">{mainText}</span>
          <span className="text-muted font-sans text-xs">{subText}</span>
        </div>
        <hr className="flex-grow border-t border-line mx-2 self-center" />
        <span
          className="
            text-muted font-sans text-sm text-right
            flex-shrink-0 md:w-fit max-w-[50%]
            inline-block break-words line-clamp-2
          "
        >
          {rightText}
        </span>
      </p>
    </Wrapper>
  );
}
