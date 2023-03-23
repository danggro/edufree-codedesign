import Container from "../Container";
import CardFlexing from "./CardFlexing";
import FlexingItemLeft from "./FlexingItemLeft";
import FlexingItemRight from "./FlexingItemRight";
import Ditlance from "./Logo/Ditlance";
import Lorem from "./Logo/Lorem";
import Neovasi from "./Logo/Neovasi";
import Onago from "./Logo/Onago";
import Owthest from "./Logo/Owthest";

export default function SectionFlexing() {
  return (
    <section id="flexing">
      <div className="w-screen py-20 bg-secondary-blue">
        <Container>
          <div className="flex items-end ">
            <div className="flex w-4/12 space-x-10">
              <FlexingItemLeft main="21.000" submain={"Siswa Terdaftar"} />
              <FlexingItemLeft main="100" submain={"Instruktur Ahli"} />
              <FlexingItemLeft main="150" submain={"Kursus Gratis"} />
            </div>
            <div className="flex justify-end w-8/12 space-x-8">
              <FlexingItemRight logo={<Lorem />}>Lorem</FlexingItemRight>
              <FlexingItemRight logo={<Ditlance />}>Ditlance</FlexingItemRight>
              <FlexingItemRight logo={<Owthest />}>Owthest</FlexingItemRight>
              <FlexingItemRight logo={<Neovasi />}>Neovasi</FlexingItemRight>
              <FlexingItemRight logo={<Onago />}>Onago</FlexingItemRight>
            </div>
          </div>
        </Container>
      </div>
      <div className="my-[122px]">
        <Container>
          <h1 className="w-6/12 text-center font-semibold text-[38px] mx-auto ">
            Keuntungan Bergabung Dengan E-Learning EDUFREE
          </h1>
          <div className="flex flex-wrap mt-16 -mx-[21px]">
            <CardFlexing
              num={`1`}
              main="Kursus Gratis"
              submain={`Kami menyediakan beberapa kursus gratis untuk menunjang ketersediaan pendidikan untuk masyarakat kurang mampu`}
              padding=""
            />
            <CardFlexing
              num={`2`}
              main="Akses Selamanya"
              submain={`Semua kursus yang telah kamu daftar bisa diakses selamanya sehingga belajar kamu lebih nyaman dan tidak terburu-buru `}
              padding=""
            />
            <CardFlexing
              num={`3`}
              main="Grup Konsultasi"
              submain={`Terdapat grup konsultasi yang berguna jika kamu ingin menanyakan suatu pertanyaan  dan kamu juga bisa mebuka diskusi baru `}
              padding=""
            />
            <CardFlexing
              num={`4`}
              main="Sertifikat dan Portofolio"
              submain={`Setelah menyelesaikan kursus kamu akan mendapatkan sertifikat serta portofolio dari project kursus yang telah diselesaikan`}
              padding=""
            />
            <CardFlexing
              num={`5`}
              main="Belajar Lebih Terarah"
              submain={`Kursus menyediakan kursus dari level dasar hingga expert sehingga semua  bisa belajar dengan  layanan yang kami sediakan`}
              padding="pr-5"
            />
            <CardFlexing
              num={`6`}
              main="Instruktur Berpengalaman"
              submain={`Kami mempunyai instruktur berpengalaman yang diambil dari dunia industri yang tak diragukan lagi pengalamannya`}
              padding=""
            />
          </div>
        </Container>
      </div>
    </section>
  );
}
