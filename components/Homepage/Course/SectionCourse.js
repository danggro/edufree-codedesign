import Link from "next/link";
import Button from "../../Button";
import Container from "../../Container";
import CardCourse from "./CardCourse";

export default function SectionCourse() {
  return (
    <section id="course" className="my-[150px]">
      <Container>
        <div className="flex items-center justify-between pb-5 border-b ">
          <h2 className="font-semibold text-[38px] w-6/12">
            Rekomendasi Kursus Untuk Kamu
          </h2>
          <div className="flex space-x-12">
            <div className="flex items-center space-x-5 text-lg font-medium">
              <span>Kategori</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
            <Link href="/courses">
              <Button variant={`yellow`}>Lihat Semua</Button>
            </Link>
          </div>
        </div>
        <div className="mt-[60px] mb-[160px] flex space-x-[71px]">
          <div className="w-4/12">
            <CardCourse
              star="4,9"
              image={`/course-1.jpg`}
              title="Dasar Pemrograman WEB"
              desc="Materi pembelajaran mengenai pembuatan website tingkat pemula"
              time="4,5"
              video="20"
              siswa="1.900"
              id="1"
            />
          </div>
          <div className="w-4/12">
            <CardCourse
              star="4,9"
              image={`/course-2.png`}
              title="Digital Marketing 101"
              desc="Materi mengenai strategi dan konsep marketing  pemula"
              time="6,2"
              video="32"
              siswa="930"
              id="2"
            />
          </div>
          <div className="w-4/12">
            <CardCourse
              star="4,9"
              image={`/course-3.png`}
              title="Data Science Dasar"
              desc="Materi pembelajaran mengenai dasar-dasar data science"
              time="8"
              video="46"
              siswa="1,043"
              id="3"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
