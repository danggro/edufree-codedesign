import Link from "next/link";

export default function FooterLink({ href, children }) {
  return (
    <li className="mb-2">
      <Link
        href={href}
        target="_blank"
        className="text-lg hover:underline leading-[27px] opacity-80 hover:opacity-100"
      >
        {children}
      </Link>
    </li>
  );
}
