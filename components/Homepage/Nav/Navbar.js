import Link from "next/link";
import Button from "../../Button";
import Container from "../../Container";
import ItemLink from "../../ItemLink";

export default function Navbar() {
  return (
    <nav id="home" className="w-screen py-5 text-white bg-dark-blue">
      <Container>
        <div className="flex items-center justify-between">
          <div className="w-5/12">
            <h2 className="text-2xl font-bold">
              <a href="#home" className="hover:text-yellow">{`[EDUFREE]`}</a>
            </h2>
          </div>
          <ul className="flex space-x-[34px]">
            <ItemLink variant={`white`} href="#home">
              HOME
            </ItemLink>
            <ItemLink variant={`white`} href="#about">
              TENTANG KAMI
            </ItemLink>
            <ItemLink variant={`white`} href="#course">
              KURSUS
            </ItemLink>
            <ItemLink variant={`white`} href="#faq">
              FAQ
            </ItemLink>
            <ItemLink variant={`white`} href="#blog">
              <div className="flex items-center space-x-1">
                <span>BLOG</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M8.333 5H5a1.667 1.667 0 00-1.667 1.667V15A1.667 1.667 0 005 16.667h8.333A1.667 1.667 0 0015 15v-3.333m-3.333-8.334h5m0 0v5m0-5l-8.334 8.334"
                  ></path>
                </svg>
              </div>
            </ItemLink>
          </ul>
          <div className="flex">
            <Link href={`/login`}>
              <Button variant={`transparent`}>Login</Button>
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}
