import TableActivity from "./TableActivity";

export default function Activity() {
  return (
    <div className="w-full bg-white rounded-[30px] px-[38px] py-[31px] mt-[58px] mb-[26px]">
      <div className="flex items-center justify-between">
        <h4 className="text-[22px] mb-1 font-semibold ">Aktivitas Belajar</h4>
        <div className="flex items-center space-x-6">
          <div className="relative ">
            <input
              type="text"
              placeholder="Search"
              className="py-3 pl-10 text-xs border-none text-primary/70 rounded-xl bg-secondary/60"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              className="absolute top-2 left-2"
            >
              <path
                stroke="#7E7E7E"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
              ></path>
            </svg>
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
      </div>
      <TableActivity />
    </div>
  );
}
