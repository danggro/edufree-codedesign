import React from "react";

function DiagramPie() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="229"
      height="229"
      fill="none"
      viewBox="0 0 229 229"
    >
      <circle cx="114.5" cy="114.5" r="114.5" fill="#fff"></circle>
      <circle
        cx="114.5"
        cy="114.5"
        r="74.5"
        stroke="#F1EFFB"
        strokeWidth="20"
      ></circle>
      <path
        fill="#1C1E53"
        d="M114.5 24a90.5 90.5 0 11-67.486 150.798l23.607-21.093a58.846 58.846 0 0052.917 18.939 58.851 58.851 0 0044.671-34.108A58.84 58.84 0 00114.5 55.658V24z"
      ></path>
      <path
        fill="#FCD980"
        d="M114.5 17a90.498 90.498 0 0186.141 62.75l-38.94 12.544A49.591 49.591 0 00114.5 57.911V17z"
      ></path>
    </svg>
  );
}

export default DiagramPie;
