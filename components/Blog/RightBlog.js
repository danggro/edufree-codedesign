import Image from "next/image";
const blog = [
  {
    image: "/blog-4.png",
    title: "Mudah Dalam Membuat Webtsite Tanpa Coding",
    date: "1 Februari 2022",
    width: "120",
    height: "120",
  },
  {
    image: "/blog-5.png",
    title: "Pelajari Alur Pembuatan Sebuah Design Product",
    date: "5 Februari 2022",
    width: "120",
    height: "120",
  },
  {
    image: "/blog-6.png",
    title: "Apa yang harus diperesiapkan untuk melamar pekerjaan",
    date: "1 Maret 2022",
    width: "120",
    height: "120",
  },
  {
    image: "/blog-7.png",
    title: "Pekerjaan bidang tekonolgi yang bisa didapatkan tanpa kuliah",
    date: "5 Maret 2022",
    width: "120",
    height: "120",
  },
];

export default function RightBlog() {
  return (
    <>
      {blog.map((b, i) => {
        return (
          <li key={i}>
            <div className="flex items-center space-x-4">
              <div>
                <h3 className="text-xl font-medium">{b.title}</h3>
                <p className="mt-6 text-lg opacity-70">{b.date}</p>
              </div>
              <div className="min-w-[120px]">
                <Image
                  width={`120`}
                  height={`120`}
                  alt=""
                  src={b.image}
                  className="w-full"
                />
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
}
