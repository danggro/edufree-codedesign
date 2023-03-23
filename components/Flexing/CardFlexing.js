import CardBook from "./CardBook";

export default function CardFlexing({ num, main, submain, padding }) {
  const addPadding = padding ? `${padding}` : "";

  return (
    <div className="w-4/12 px-[21px] mb-[42px] ">
      <div className="pl-12 pr-[30px] py-12 bg-secondary-blue">
        <div className="relative">
          <CardBook />
          <span className="absolute text-xl font-bold text-white top-2 left-5">
            {num}
          </span>
        </div>
        <h4 className="mt-5 mb-3 text-2xl font-medium">{main}</h4>
        <p className={`text-base opacity-70 ${addPadding}`}>{submain}</p>
      </div>
    </div>
  );
}
