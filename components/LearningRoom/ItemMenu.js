export default function ItemMenu({ children, def }) {
  return (
    <li className="flex items-center mb-5 space-x-3 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="none"
        viewBox="0 0 30 30"
      >
        <g
          stroke="#21A099"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          opacity="0.8"
        >
          <path d="M18.44 13.96l-3.996-2.665a1.25 1.25 0 00-1.944 1.042v5.33a1.25 1.25 0 001.944 1.04l3.996-2.666a1.25 1.25 0 000-2.08v-.001z"></path>
          <path d="M26.25 15a11.25 11.25 0 11-22.499 0 11.25 11.25 0 0122.499 0z"></path>
        </g>
      </svg>
      <p className={`text-sm opacity-70 ${def ? "font-bold" : ""}`}>
        {children}
      </p>
    </li>
  );
}
