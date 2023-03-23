import Image from "next/image";
import Link from "next/link";
import ArrowRight from "../ArrowRight";
import Button from "../Button";
import Container from "../Container";

export default function SectionHero() {
  return (
    <section id="hero" className="w-screen bg-dark-blue py-[100px]">
      <Container>
        <div className="flex items-center">
          <div className="w-6/12">
            <h1 className="font-semibold text-[42px] text-white leading-relaxed">
              Bangun dan Wujudkan Cita bersama EDUFREE
            </h1>
            <h4 className="pr-10 mt-8 mb-16 text-base text-white">
              EDUFREE adalah sebuah layanan kursus dan pelatihan gratis secara
              online yang bertujuan untuk membantu kamu meraih cita di bidang
              teknologi.
            </h4>
            <div className="flex space-x-[35px] items-center text-white">
              <Button variant={`yellow`}>Lihat Kursus</Button>
              <Link href={``} className="hover:underline">
                <div className="flex items-center space-x-2">
                  <h4 className="text-base">Lihat Alur Belajar</h4>
                  <ArrowRight />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex justify-end w-6/12">
            <Image width={`577`} height="371" alt="" src={`/hero.png`} />
          </div>
        </div>
      </Container>
    </section>
  );
}
