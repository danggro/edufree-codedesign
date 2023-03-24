export default function Search({ place }) {
  return (
    <input
      type="text"
      placeholder={place}
      className="w-full mt-[125px] mb-[43px] h-16 px-10 text-xl opacity-80 rounded-[8px]"
    />
  );
}
