import Image from "next/image";
import Link from "next/link";

import People from "./People";
import Star from "./Star";
import Time from "./Time";
import Video from "./Video";

export default function CardCourse({
  image,
  title,
  desc,
  time,
  video,
  siswa,
  star,
}) {
  return (
    <div>
      <div className="relative">
        <Link href={`/`} className="">
          <Image width={`386`} height="236" src={image} alt="" />
        </Link>
        <div className="absolute bottom-0 flex items-center px-3 py-1 translate-y-[50%] space-x-1 text-white rounded-full bg-dark-blue right-2 text-xs">
          <Star />
          <span>{star}</span>
        </div>
      </div>
      <div className="px-4 py-6 ">
        <h4 className="text-2xl font-medium">
          <Link href={`/`}>{title}</Link>
        </h4>
        <p className="mt-1 mb-6 text-base opacity-70">{desc}</p>
        <div className="flex items-center space-x-4 opacity-90">
          <div className="flex items-center space-x-2">
            <Time />
            <p className="text-base">
              {time}
              {` Jam`}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Video />
            <p className="text-base">
              {video}
              {` Video`}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <People />
            <p className="text-base">
              {siswa}
              {` Siswa`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
