import Link from "next/link";
import ArrowRight from "../../ArrowRight";
import Container from "../../Container";
import CardBlog from "./CardBlog";

export default function SectionBlog() {
  return (
    <section id="blog">
      <Container>
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-[38px]">Blog, Berita dan Event</h2>
          <div className="flex items-center space-x-2">
            <Link href={`/Blog`} className="hover:underline">
              <span className="text-base">Lihat Semua</span>
            </Link>
            <ArrowRight />
          </div>
        </div>
        <div className="flex mt-16 -mx-5">
          <CardBlog
            image={`/blog-1.png`}
            date="19 Jan 2022"
            title={`Cara Mudah Untuk Memulai Belajar Programming - EDUFREE `}
            desc="Menjadi seorang programmer saat ini sudah sangat mudah untuk dipelajari oleh siapapun ..."
            id="2"
          />
          <CardBlog
            image={`/blog-2.png`}
            date="19 Jan 2022"
            title={`Tips Membuat Website Landing Page Bussines - EDUFREE`}
            desc="Pentingnya website dalam menumbuhkan rasa kepercayaan terhadap bisnis, membuat ..."
            id="3"
          />
          <CardBlog
            image={`/blog-3.png`}
            date="19 Jan 2022"
            title={`Cara Installasi Wordpress Untuk Pemula -EDUFREE`}
            desc="Membuat website saat ini sudah bisa tanpa codingan, kini kamu bisa membuatnya dengan ..."
            id="4"
          />
        </div>
      </Container>
    </section>
  );
}
