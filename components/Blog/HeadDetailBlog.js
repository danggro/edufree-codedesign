import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import mockBlog from "@/utils/Blog.json";

export default function HeadDetailBlog() {
  const [blogs, setBlogs] = useState(mockBlog);
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      {blogs.map((blog) => {
        if (blog.id === id) {
          return (
            <>
              <div key={blog.id} className="w-8/12 mx-auto mt-[130px]">
                <div className="w-[154px] flex justify-center items-center h-8 bg-royal-blue text-white rounded-md">
                  # Tips & Tricks
                </div>
                <h2 className="my-2 font-semibold text-[42px]">{blog.title}</h2>
                <p className="mb-12 text-base font-medium opacity-70">
                  <span className="font-bold">Dimas Rizky</span> diposting pada
                  {` `}
                  {blog.date}
                </p>
              </div>
              <div
                className="bg-cover w-[1080px] mx-auto h-[455px] mb-12 overflow-hidden"
                style={{ backgroundImage: `url(${blog.image})` }}
              >
                {/* <Image
          width="1080"
          height="455"
          alt=""
          src="/blog-1.png"
          className=""
        /> */}
              </div>
            </>
          );
        }
      })}
    </>
  );
}
