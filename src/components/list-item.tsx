export default function ListItem({
  mainText,
  subText,
  rightText,
  isLink = true,
}: {
  mainText?: string;
  subText?: string;
  rightText?: string;
  isLink?: boolean;
}) {
  return (
    <p className={`transition-700 flex flex-row items-baseline-last ${ isLink ? "cursor-pointer hover:bg-[#E1E1E1] dark:hover:bg-[#2A2A2A]" : "cursor-default" }`}>
      <span className="text-theme font-sans text-base">{ mainText }</span>
      <span className="text-muted font-sans text-xs ml-2">{ subText }</span>
      <hr className="flex-1 border-t border-line mx-2 self-center" />
      <span className="text-muted font-sans text-sm text-right md:w-fit max-w-[50%]">{ rightText }</span>
    </p>
  );
}