import Link from "next/link";
import Button from "../../Button";
import InputRegistration from "./InputRegistration";

export default function Registration() {
  return (
    <div className="flex w-full text-white bg-dark-blue">
      <div className="w-6/12 bg-[url('../public/registration.jpg')] bg-cover ">
        <div className="pl-[75px] h-full pt-[75px] pr-[150px] pb-[330px] bg-dark-blue/60">
          <h2 className="text-[42px] font-semibold">
            Selangkah Lebih Dekat Dengan Impianmu
          </h2>
          <p className="mt-6 text-base font-medium">
            Sebuah layanan E-Learning gratis yang siap membantumu menjadi
            seorang ahli
          </p>
        </div>
      </div>
      <div className="w-6/12 py-[74px] px-[101px]">
        <h3 className="text-[28px] font-semibold">Daftarkan Dirimu!</h3>
        <p className="pr-10 mt-4 text-base text-secondary/90">
          Persiapkan diri untuk masa depan yang penuh dengan bintang
        </p>
        <div className="mt-12 ">
          <InputRegistration place="Your Name" type="text" />
          <InputRegistration place="Email" type="email" />
          <InputRegistration place="Password" type="password" />
        </div>
        <div className="mt-10">
          <Button variant={`yellow-tracking`}>DAFTAR</Button>
        </div>
        <p className="text-center text-lg mt-[27px]">
          Sudah punya akun?{` `}
          <Link href={`/login`} className="underline hover:text-yellow">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
