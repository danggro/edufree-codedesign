export default function Button({ variant, children }) {
  const variants = {
    transparent:
      "w-[126px] h-[50px] text-base border-white hover:border-yellow hover:text-yellow",
    yellow:
      "w-[185px] h-[54px] text-base font-medium text-dark-blue bg-yellow border-yellow hover:bg-transparent hover:text-yellow",
    "yellow-tracking":
      "w-full h-[64px] text-lg font-bold text-dark-blue bg-yellow border-yellow hover:bg-transparent hover:text-yellow tracking-[5px]",
  };

  const pickedVariant = variants[variant];
  return (
    <button className={`rounded-[5px] border ${pickedVariant}`}>
      {children}
    </button>
  );
}
