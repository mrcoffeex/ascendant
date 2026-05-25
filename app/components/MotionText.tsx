type LinePart = {
  text: string;
  highlight?: boolean;
};

type MotionTextProps = {
  lines: LinePart[][];
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
};

export function MotionText({
  lines,
  className = "",
  as: Tag = "h1",
}: MotionTextProps) {
  return (
    <Tag className={`motion-text ${className}`.trim()}>
      {lines.map((line, lineIndex) => (
        <span
          key={`line-${lineIndex}`}
          className="motion-text__line"
          style={{ ["--line-index" as string]: lineIndex }}
        >
          {line.map((part, partIndex) => (
            <span
              key={`part-${lineIndex}-${partIndex}`}
              className={part.highlight ? "motion-text__highlight hero-accent" : undefined}
            >
              {part.text}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
}
