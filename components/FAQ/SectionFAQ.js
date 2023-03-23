import Container from "../Container";
import CardFAQ from "./CardFAQ";

export default function SectionFAQ() {
  return (
    <section id="faq" className="py-[150px]">
      <Container>
        <div className="flex">
          <div className="w-4/12 pr-24">
            <h4 className="text-[28px] font-semibold">
              Frequently Asked Questions
            </h4>
            <p className="text-base opacity-70">
              Masih bingung atau ragu? Hubungi kami di nomor +6288 999 222 333
            </p>
          </div>
          <div className="w-8/12">
            <CardFAQ
              first
              number={`01`}
              question={`Apakah kursus ini benar-benar gratis?`}
              answer="Kursus yang disediakan bisa diakses gratis untuk menunjang kebutuhan dalam bidang kependidikan."
            />
            <CardFAQ
              number={`02`}
              question={`Untuk siapa kursus ini?`}
              answer="Kursus yang disediakan bisa diakses gratis untuk menunjang kebutuhan dalam bidang kependidikan."
            />
            <CardFAQ
              number={`03`}
              question={`Apakah kursus ini bersertifikat?`}
              answer="Kursus yang disediakan bisa diakses gratis untuk menunjang kebutuhan dalam bidang kependidikan."
            />
            <CardFAQ
              number={`04`}
              question={`Sampai kapan kursus ini berakhir?`}
              answer="Kursus yang disediakan bisa diakses gratis untuk menunjang kebutuhan dalam bidang kependidikan."
            />
            <CardFAQ
              number={`05`}
              question={`Apakah ada penyaluran kerja setelah lulus?`}
              answer="Kursus yang disediakan bisa diakses gratis untuk menunjang kebutuhan dalam bidang kependidikan."
              end
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
