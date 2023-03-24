import Image from "next/image";
import Container from "./Container";
import ItemLink from "./ItemLink";

export default function Header() {
  return (
    <section>
      <div className="w-screen py-5 text-white bg-dark-blue">
        <Container>
          <div className="flex items-center justify-between">
            <div className="w-3/12">
              <h2 className="text-2xl font-bold">
                <a href="#home" className="hover:text-yellow">{`[EDUFREE]`}</a>
              </h2>
            </div>
            <ul className="flex space-x-[34px] w-6/12 justify-center">
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
            <div className="flex items-center justify-end w-3/12">
              <Image width={`42`} height="42" src={`/avatar-nav.png`} alt="" />
              <div className="ml-3 mr-10">
                <p className="text-sm font-medium">Hi, Dimas </p>
                <p className="text-xs opacity-70">Frontend Developer</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 9l6 6 6-6"
                ></path>
              </svg>
            </div>
          </div>
        </Container>
      </div>
      <div className="w-screen bg-secondary-blue py-7">
        <Container>
          <p className="text-base font-medium opacity-70">Home &gt; Kursus</p>
        </Container>
      </div>
    </section>
  );
}
