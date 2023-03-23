import React from "react";

function CardBook() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
    >
      <mask
        id="mask0_1_296"
        style={{ maskType: "alpha" }}
        width="40"
        height="40"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <rect width="40" height="40" fill="#2405F2" rx="5"></rect>
      </mask>
      <g mask="url(#mask0_1_296)">
        <rect width="40" height="40" fill="#2405F2" rx="5"></rect>
        <rect
          width="40"
          height="40"
          x="-31"
          y="14"
          fill="#FCD980"
          rx="5"
        ></rect>
      </g>
    </svg>
  );
}

export default CardBook;
