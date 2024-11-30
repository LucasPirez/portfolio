export default function TechStack({
  tecnologie,
  Component,
  color,
  colorIcon,
}) {
  console.log(color);
  return (
    <span
      className={`flex gap-1  border-[1px]  p-1 px-3 rounded-[50px]`}
      style={{ color, borderColor: color }}
    >
      <Component width={22} height={22} stroke={colorIcon} />
      <p>{tecnologie}</p>
    </span>
  );
}
