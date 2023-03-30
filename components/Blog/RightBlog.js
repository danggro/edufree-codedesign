import Image from "next/image";
import mockBlog from "@/utils/Blog.json";
import { useState } from "react";
import Link from "next/link";

export default function RightBlog() {
  const [blogs, setBlogs] = useState(mockBlog);
  return (
    <>
      {blogs.map((b, i) => {
        if (b.id > 4) {
          return (
            <li key={i}>
              <div className="flex items-center space-x-4">
                <div>
                  <Link
                    href={{
                      pathname: "/blogdetail",
                      query: { id: `${b.id}` },
                    }}
                  >
                    <h3 className="text-xl font-medium">{b.title}</h3>
                  </Link>
                  <p className="mt-6 text-lg opacity-70">{b.date}</p>
                </div>
                <div className="min-w-[120px]">
                  <Link
                    href={{
                      pathname: "/blogdetail",
                      query: { id: `${b.id}` },
                    }}
                  >
                    <Image
                      width={`120`}
                      height={`120`}
                      alt=""
                      src={b.image}
                      className="w-full"
                    />
                  </Link>
                </div>
              </div>
            </li>
          );
        }
      })}
    </>
  );
}
