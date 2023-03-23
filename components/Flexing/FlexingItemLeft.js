export default function FlexingItemLeft({ main, submain }) {
  return (
    <div>
      <h2 className="font-semibold text-[32px] leading-snug">
        {main}
        {`+`}
      </h2>
      <p className="text-base">{submain}</p>
    </div>
  );
}
