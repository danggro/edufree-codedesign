import Image from "next/image";
import { useState } from "react";
import ItemLink from "./ItemLink";

export default function Layout({ children, menu }) {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="flex max-h-screen">
      <div className="flex-shrink-0 min-h-[100vh] bg-white w-[306px] mb-[60px] overflow-y-scroll">
        <div className="w-full bg-dark-blue">
          <h2 className="py-6 text-2xl font-bold text-center text-white">{`[EDUFREE]`}</h2>
        </div>
        {menu}
      </div>
      <div className="w-full max-h-[100vh] bg-secondary-blue px-[71px] overflow-y-scroll">
        <div className="py-6 mb-[40px] flex items-center justify-between">
          <div className="relative z-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="34"
              fill="none"
              viewBox="0 0 40 34"
              onClick={() => {
                setDropdown(!dropdown);
              }}
            >
              <path stroke="#282938" strokeWidth="4" d="M0 2L40 2"></path>
              <path stroke="#282938" strokeWidth="4" d="M0 17L40 17"></path>
              <path stroke="#282938" strokeWidth="4" d="M0 32L40 32"></path>
            </svg>

            <div
              className={`-z-10 absolute w-40 px-5 py-4 bg-white transition-all rounded-b-xl rounded-r-xl ${
                dropdown ? "top-12 scale-100" : "top-0 scale-0 origin-top-left"
              }`}
            >
              <ul>
                <ItemLink variant={`black`} href="/" page>
                  Home
                </ItemLink>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-end ">
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
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 9l6 6 6-6"
              ></path>
            </svg>
          </div>
        </div>

        <div className="-z-10">{children}</div>
      </div>
    </div>
  );
}
