import Button from "@/components/Button";
import Link from "next/link";
import { Component } from "react";
export default class extends Component {
  render() {
    return (
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="text-center">
          <div className="text-yellow font-semibold text-[200px]">
            4<span className="text-primary">0</span>4
          </div>
          <h2 className=" -mt-10 font-semibold text-[38px] ">
            Upss... Halaman Tidak Ditemukan
          </h2>
          <p className="mt-4 mb-16 w-[521px] mx-auto text-lg opacity-50">
            Mohon maaf, halaman yang anda buka tidak ditemukan Pastikan url yang
            anda masukkan benar
          </p>
          <Link href="/">
            <Button className="w-[185px] mx-auto" variant={`yellow`}>
              Homepage
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
