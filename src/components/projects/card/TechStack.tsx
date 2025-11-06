interface TechStackProps {
  tecnologie: string;
  Component: React.ComponentType<{
    width: number;
    height: number;
    stroke: string;
  }>;
  color: string;
  colorIcon: string;
  className?: string;
}

export default function TechStack({
  tecnologie,
  Component,
  color,
  colorIcon,
  className = '',
}: TechStackProps) {
  return (
    <span
      className={`flex border-[1px]  p-1 px-3 rounded-[50px] ${className} `}
      style={{ color, borderColor: color }}
    >
      <Component width={21} height={21} stroke={colorIcon} />
      <p>{tecnologie}</p>
    </span>
  );
}
