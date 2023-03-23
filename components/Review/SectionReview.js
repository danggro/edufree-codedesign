import Image from "next/image";
import Container from "../Container";

export default function SectionReview() {
  return (
    <section id="review" className="w-screen py-20 bg-secondary-blue">
      <Container>
        <div className="flex">
          <div className="w-4/12">
            <h4 className="text-[28px] font-semibold pr-10">
              Kata Mereka Tentang Kursus EDUFREE
            </h4>
            <p className="text-base pr-28 opacity-70">
              EDUFREE telah dipercaya lebih dari 10.000 siswa
            </p>
          </div>
          <div className="w-8/12 pl-10">
            <h3 className="font-medium text-[26px] text-justify ">
              &quot;Materi yang disampaikan mudah dimengerti, kualitas
              instruktur sangat baik serta responnya yang cepat. So, kursus
              disini sangat sangat saya rekomendasikan!!&quot;
            </h3>
            <div className="flex justify-between mt-10">
              <div className="flex items-center space-x-[14px]">
                <Image
                  width={`52`}
                  height="52"
                  src="/avatar-reviewer.jpg"
                  alt=""
                  className="rounded-full"
                />
                <div>
                  <div className="text-lg font-medium">Jenny Wilson</div>
                  <div className="text-xs font-medium">Vice President</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-4 h-4 rounded-full bg-royal-blue opacity-40"></span>
                <span className="w-4 h-4 rounded-full bg-royal-blue"></span>
                <span className="w-4 h-4 rounded-full bg-royal-blue opacity-40"></span>
                <span className="w-4 h-4 rounded-full bg-royal-blue opacity-40"></span>
                <span className="w-4 h-4 rounded-full bg-royal-blue opacity-40"></span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
