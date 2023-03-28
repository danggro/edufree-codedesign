import Image from "next/image";
import Link from "next/link";

const blog = [
  {
    image: "/blog-1.png",
    title: "Cara Mudah Untuk Memulai Belajar Programming - EDUFREE ",
    date: "19 Januari 2022",
    desc: "Menjadi seorang programmer saat ini sudah sangat mudah untuk dipelajari oleh siapapun ...",
  },
  {
    image: "/blog-2.png",
    title: "Tips Membuat Website Landing Page Bussines - EDUFREE",
    date: "19 Januari 2022",
    desc: "Pentingnya website dalam menumbuhkan rasa kepercayaan terhadap bisnis, membuat ...",
  },
  {
    image: "/blog-3.png",
    title: "Apa yang harus diperesiapkan untuk melamar pekerjaan",
    date: "19 Januari 2022",
    desc: "Membuat website saat ini sudah bisa tanpa codingan, kini kamu bisa membuatnya dengan ...",
  },
];

export default function BotBlog() {
  return (
    <>
      {blog.map((b, i) => {
        return (
          <li key={i}>
            <Link href={``}>
              <Image width={`405`} height="285" src={b.image} alt="" />
            </Link>
            <p className="mt-10 text-base font-medium opacity-70">{b.date}</p>
            <Link href={``}>
              <h4 className="mt-4 text-xl font-medium">{b.title}</h4>
            </Link>
            <p className="mt-4 text-base opacity-70">{b.descdesc}</p>
            <div className="text-base font-medium mt-9">
              <Link
                href={``}
                className="flex items-center space-x-2 w-fit hover:underline"
              >
                <span>Selengkapnya</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="12"
                  fill="none"
                  viewBox="0 0 25 12"
                >
                  <path
                    fill="#282938"
                    d="M24.53 6.53a.75.75 0 000-1.06L19.757.697a.75.75 0 00-1.06 1.06L22.939 6l-4.242 4.243a.75.75 0 001.06 1.06L24.53 6.53zM0 6.75h24v-1.5H0v1.5z"
                  ></path>
                </svg>
              </Link>
            </div>
          </li>
        );
      })}
    </>
  );
}
