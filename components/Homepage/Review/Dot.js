import { useState } from "react";

export default function Dot() {
  useState;
  return (
    <span
      className="w-4 h-4 rounded-full cursor-pointer bg-royal-blue opacity-40"
      onClick={(e) => {
        const dots = Array.from(document.getElementById("dot").children);
        console.log(dots);
        dots.forEach((d) => {
          d.classList.add("opacity-40");
        });
        e.target.classList.remove("opacity-40");
      }}
    ></span>
  );
}
