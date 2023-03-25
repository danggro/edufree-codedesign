import Image from "next/image";
import Button from "../Button";

export default function CoreLearningRoom() {
  return (
    <>
      <p className="text-lg font-medium opacity-80">Dasar Pemrograman Web</p>
      <h2 className="mb-10 text-[38px] font-semibold">Instalasi Tools</h2>
      <div className="relative mt-[72px] ">
        <Image
          src="/course-1.jpg"
          width="992"
          height="590"
          alt=""
          className="bg-cover"
        />
        <div className="absolute top-0 bottom-0 flex items-center justify-center w-full bg-fit bg-black/60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="109"
            height="123"
            fill="none"
            viewBox="0 0 109 123"
            className="cursor-pointer"
          >
            <path
              fill="#FCD980"
              d="M.439 5.287C.372 1.438 4.496-1.04 7.862.827l98.468 54.58c3.366 1.867 3.45 6.677.151 8.66L9.978 122.05c-3.3 1.983-7.507-.35-7.574-4.198L.439 5.287z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="flex justify-between mt-6 mb-[115px]">
        <Button variant={`yellow`}>Kembali</Button>
        <Button variant={`yellow`}>Selesai & Lanjut</Button>
      </div>
    </>
  );
}
