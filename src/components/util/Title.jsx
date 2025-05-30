export default function Title({ text, className = '' }) {
  return (
    <h3
      className={`lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold bg-clip-text text-transparent bg-gradient-to-bl to-myLightRed/80 from-myLightRed/80 mb-10 dark:from-purple dark:text-myLightRed/40 custom-text line-height-2 ${className}`}
    >
      {text}
    </h3>
  );
}
