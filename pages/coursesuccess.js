import Button from "@/components/Button";
import Image from "next/image";

export default function coursesuccess() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="text-center">
        <Image
          width={`396`}
          height="225"
          src="/courses-success.jpg"
          alt=""
          className="mx-auto bg-cover"
        />
        <h2 className="mt-[35px] mb-[10px] text-[38px] font-semibold">
          Selamat! Kursus Anda Telah Di Buka
        </h2>
        <p className="mb-16 text-lg opacity-70">
          Kursus yang anda pilih sudah dibuka. Silahkan klik tombol di bawah ini
        </p>
        <div className="mx-auto">
          <Button variant={`yellow`}>Buka Kursus</Button>
        </div>
      </div>
    </div>
  );
}
