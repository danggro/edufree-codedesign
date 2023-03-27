import ItemBar from "./ItemBar";
import mockCharbar from "@/utils/Charbar.json";
import { useState } from "react";
export default function Overview() {
  const [charbar, setCharbar] = useState(mockCharbar);
  return (
    <>
      <div className="w-8/12 bg-white rounded-[30px] px-[38px] py-[31px]">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-[22px] mb-1 font-semibold ">Overview</h4>
            <p className="text-sm text-primary/50">Video selesai (Hari)</p>
          </div>
          <button className="px-4 py-2 rounded-xl bg-secondary/60">
            <div className="flex items-center space-x-4 ">
              <span className="text-xs text-primary/70">Kategori</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#7E7E7E"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 9l6 6 6-6"
                ></path>
              </svg>
            </div>
          </button>
        </div>
        <div className="mt-5 ">
          <ul id="bar" className="flex items-end justify-between">
            {charbar.map((c) => {
              return (
                <section key={c.date}>
                  <ItemBar video={parseInt(c.video)} date={c.date} />
                </section>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
