import { cn } from "~/lib/utils";

type TitleSeparatorProps = {
  classNames?: {
    wrapper?: string;
    content?: string;
  };
  title: string;
};

export default function TitleSeparator({
  classNames,
  title,
}: TitleSeparatorProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-center",
        classNames?.wrapper
      )}
    >
      <hr className="w-full bg-muted-foreground" />
      <span
        className={cn(
          "mx-2 whitespace-nowrap font-semibold text-muted-foreground text-sm",
          classNames?.content
        )}
      >
        {title}
      </span>
      <hr className="w-full bg-muted-foreground" />
    </div>
  );
}
