export default function TechStack({
  tecnologie,
  Component,
  color,
  colorIcon,
  className = '',
}) {
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
