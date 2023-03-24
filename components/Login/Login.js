import Link from "next/link";
import Button from "../Button";
import InputLogin from "./InputLogin";

export default function Login() {
  return (
    <div className="flex w-full text-white bg-dark-blue">
      <div className="w-6/12 bg-[url('../public/registration.jpg')] bg-cover ">
        <div className="pl-[75px] h-full pt-[75px] pr-[150px] pb-[330px] bg-dark-blue/60">
          <h2 className="text-[42px] font-semibold pr-20">
            Selangkah Lebih Dekat Dengan Impianmu
          </h2>
          <p className="pr-20 mt-6 text-base font-medium leading-[28px]">
            Sebuah layanan E-Learning gratis yang siap membantumu menjadi
            seorang ahli
          </p>
        </div>
      </div>
      <div className="w-6/12 py-[74px] px-[101px]">
        <h3 className="text-[28px] font-semibold">Login</h3>
        <p className="pr-10 mt-4 text-base text-secondary/90">
          Persiapkan diri untuk masa depan yang penuh dengan bintang
        </p>
        <div className="mt-12 ">
          <InputLogin place="Email" type="email" />
          <InputLogin place="Password" type="password" />
          <div className="flex space-x-3">
            <input
              type={`checkbox`}
              className="mt-1 bg-transparent decoration-0 text-yellow focus:ring-0 checked:bg-yellow"
            />
            <span className="text-sm opacity-50">simpan info masuk</span>
          </div>
        </div>
        <div className="mt-10">
          <Button variant={`yellow-tracking`}>MASUK</Button>
        </div>
        <p className="text-center text-lg mt-[27px]">
          Belum punya akun?{" "}
          <Link href={`/registration`} className="underline hover:text-yellow">
            Daftar
          </Link>
        </p>
      </div>
    </div>
  );
}
