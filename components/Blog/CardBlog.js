import Image from "next/image";
import Link from "next/link";

export default function CardBlog({ image, date, title, desc }) {
  return (
    <div className="w-4/12 px-5">
      <Link href={`/`}>
        <Image width={`405`} height="285" src={image} alt="" />
      </Link>
      <p className="mt-10 text-base font-medium opacity-70">{date}</p>
      <Link href={`/`}>
        <h4 className="mt-4 text-xl font-medium">{title}</h4>
      </Link>
      <p className="mt-4 text-base opacity-70">{desc}</p>
      <div className="text-base font-medium mt-9">
        <Link
          href={`/`}
          className="flex items-center space-x-2 w-fit hover:underline"
        >
          <span>Selengkapnya</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="12"
            fill="none"
            viewBox="0 0 25 12"
          >
            <path
              fill="#282938"
              d="M24.53 6.53a.75.75 0 000-1.06L19.757.697a.75.75 0 00-1.06 1.06L22.939 6l-4.242 4.243a.75.75 0 001.06 1.06L24.53 6.53zM0 6.75h24v-1.5H0v1.5z"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}
