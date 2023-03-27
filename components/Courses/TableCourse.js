import Image from "next/image";

export default function TableCourse({ image, title, desc }) {
  return (
    <div className="flex items-center flex-shrink-0 mt-6 space-x-6 xl:max-w-[280px]">
      <Image src={image} width="90" height="56" alt="" className="rounded-xl" />

      <div className="">
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-xs truncate opacity-30 max-w-[300px]">{desc}</p>
      </div>
    </div>
  );
}
