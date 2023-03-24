export default function InputLogin({ place, type }) {
  return (
    <input
      type={type}
      placeholder={place}
      className="py-5 px-8 mb-4 bg-transparent w-full text-secondary/50 border border-secondary/50 rounded-[8px]"
    />
  );
}
