import { useEffect, useState } from "react";
import VideoBar from "./VideoBar";

export default function ItemBar({ video, date }) {
  return (
    <li className="relative">
      <span
        name={date}
        className="videoBar absolute hidden -top-10 -left-[7px] z-10"
      >
        <VideoBar>{video}</VideoBar>
      </span>

      <div
        id="bar2"
        className={`w-[31px] bg-secondary rounded-[8px] mx-auto hover:bg-dark-blue/60 cursor-pointer `}
        style={{ height: video * 34.5 }}
        name={date}
        onClick={(e) => {
          const barChart = Array.from(
            document.getElementById("bar").getElementsByTagName("div")
          );
          const videoBar = Array.from(
            document.getElementById("bar").getElementsByClassName("videoBar")
          );

          videoBar.forEach((v) => {
            v.classList.add("hidden");
            v.classList.remove("block", "bg-secondary");
            if (e.target.getAttribute("name") === v.getAttribute("name")) {
              v.classList.add("block");
              v.classList.remove("hidden");
            }
          });
          barChart.forEach((b) => {
            b.classList.add("bg-secondary", "hover:bg-dark-blue/60");
            b.classList.remove("bg-dark-blue");
            if (e.target.getAttribute("style") === b.getAttribute("style")) {
              e.target.classList.add("bg-dark-blue");
              e.target.classList.remove(
                "bg-secondary",
                "hover:bg-dark-blue/60"
              );
            }
          });
        }}
      ></div>
      <p className="mt-3 text-xs font-medium opacity-70">
        {date}
        {` Jan`}
      </p>
    </li>
  );
}
