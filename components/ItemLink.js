export default function ItemLink({ href, children, variant }) {
  const variants = {
    white: "text-white hover:text-yellow",
    black: "text-primary hover:underline",
  };

  const pickedVariant = variants[variant];
  return (
    <li>
      <a
        href={href}
        className={`text-base font-medium  hover:underline hover:underline-offset-4 ${pickedVariant}`}
      >
        {children}
      </a>
    </li>
  );
}
