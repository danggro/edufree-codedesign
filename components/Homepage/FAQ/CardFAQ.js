import { useState } from "react";

export default function CardFAQ({ first, number, question, answer, end }) {
  const [addtext, setAddtext] = useState(false);

  return (
    <div
      className={`flex transition-all ${first ? "pt-0" : "pt-8"} ${
        end ? "" : "border-b-2"
      } ${addtext ? "pb-[100px]" : "pb-8"} `}
    >
      <h4 className={`font-medium text-2xl  text-royal-blue ml-12 mr-[60px] `}>
        {number}
      </h4>
      <div className="relative w-full">
        <div className="flex items-center justify-between ">
          <h4
            onClick={() => setAddtext(!addtext)}
            className="z-10 text-2xl font-medium cursor-pointer"
          >
            {question}
          </h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="none"
            viewBox="0 0 22 22"
            onClick={() => setAddtext(!addtext)}
            className={`transition-all cursor-pointer ${
              addtext ? "" : "rotate-45"
            }`}
          >
            <path
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5.5 5.5l11 11m-11 0l11-11-11 11z"
              opacity="0.6"
            ></path>
          </svg>
        </div>
        <div className="absolute">
          <p
            className={`w-10/12 mt-4 transition-all text-lg font-medium  ${
              addtext
                ? "translate-y-0 opacity-70"
                : "opacity-0 -translate-y-full"
            }`}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
