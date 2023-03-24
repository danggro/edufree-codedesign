import Image from "next/image";
import Button from "../Button";

export default function CourseSuccess() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="">
        <Image width={`396`} height="225" src="/courses-success.jpg" alt="" />
        <h2 className="mt-[35px] mb-[10px] text-[38px] font-semibold">
          Selamat! Kursus Anda Telah Di Buka
        </h2>
        <p className="mb-16 text-lg opacity-70">
          Kursus yang anda pilih sudah dibuka. Silahkan klik tombol di bawah ini
        </p>
        <div className="w-2/12">
          <Button variant={`yellow`}>Buka Kursus</Button>
        </div>
      </div>
    </div>
  );
}
