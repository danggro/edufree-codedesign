import Image from "next/image";
import Container from "../../Container";

export default function SectionAbout() {
  return (
    <section id="about" className="my-[150px]">
      <Container>
        <div className="flex items-center">
          <div className="w-6/12">
            <div className="mt-12 mb-[72px]">
              <p className="text-lg opacity-70">Tentang Kami</p>
              <h2 className="text-[38px] font-semibold my-4">
                EDUFREE Layanan E-Learning Gratis Untuk Membantu Kamu Bertumbuh
              </h2>
              <p className="pr-10 text-base opacity-60">
                Edufree diharapkan bisa menjadi layanan yang bermanfaat bagi
                kedepanya dalam bidang pendidikan
              </p>
            </div>
          </div>
          <div className="flex justify-end w-6/12">
            <Image width={`575`} height="398" alt="" src={`/about.jpg`} />
          </div>
        </div>
      </Container>
    </section>
  );
}
