export default function FlexingItemRight({ logo, children }) {
  return (
    <div className="flex items-center space-x-2">
      {logo}
      <h3 className="text-2xl font-bold uppercase">{children}</h3>
    </div>
  );
}
