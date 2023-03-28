import Image from "next/image";

export default function HeadDetailBlog() {
  return (
    <>
      <div className="w-8/12 mx-auto mt-[130px]">
        <div className="w-[154px] flex justify-center items-center h-8 bg-royal-blue text-white rounded-md">
          # Tips & Tricks
        </div>
        <h2 className="my-2 font-semibold text-[42px]">
          Cara Mudah Untuk Memulai Belajar Programming - EDUFREE
        </h2>
        <p className="mb-12 text-base font-medium opacity-70">
          <span className="font-bold">Dimas Rizky</span> diposting pada 27
          Januari 2022
        </p>
      </div>
      <div
        className="bg-cover w-[1080px] mx-auto h-[455px] mb-12 overflow-hidden"
        style={{ backgroundImage: "url(/blog-1.png)" }}
      >
        {/* <Image
          width="1080"
          height="455"
          alt=""
          src="/blog-1.png"
          className=""
        /> */}
      </div>
    </>
  );
}
