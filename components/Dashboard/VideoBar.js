export default function VideoBar(props) {
  return (
    <span className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="77"
        height="32"
        fill="none"
        viewBox="0 0 77 32"
      >
        <path
          fill="#000"
          d="M0 6a6 6 0 016-6h64.5a6 6 0 016 6v12a6 6 0 01-6 6H27.307l-5 8-5-8H6a6 6 0 01-6-6V6z"
        ></path>
      </svg>
      <span className="absolute w-full text-xs font-medium text-white top-1 left-4">
        {props.children}
        {` Video`}
      </span>
    </span>
  );
}
