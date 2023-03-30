import ArrowRight from "@/components/ArrowRight";
import CtgBlog from "@/components/Blog/CtgBlog";
import Header from "@/components/Header";
import SectionFooter from "@/components/Homepage/Footer.js/SectionFooter";
import Search from "@/components/Search";
import Image from "next/image";
import Link from "next/link";
import blog1 from "@/public/blog-main.png";
import Container from "@/components/Container";
import RightBlog from "@/components/Blog/RightBlog";
import BotBlog from "@/components/Blog/BotBlog";
import CoursesPage from "@/components/Courses/CoursesPage";
import mockBlog from "@/utils/Blog.json";
import { useState } from "react";

export default function Blog() {
  const [blogs, setBlogs] = useState(mockBlog);
  return (
    <>
      <Header first={`Blog`} />
      <Container>
        <div className="w-7/12 mx-auto ">
          <Search place={`Cari Blog, Event, atau Berita`} />
        </div>
        <CtgBlog />
        <div className="flex mt-20 space-x-5">
          <div className="w-7/12 ">
            <Link
              href={{
                pathname: "/blogdetail",
                query: { id: `${blogs[0].id}` },
              }}
            >
              <Image
                width={`746`}
                height="368"
                src={blogs[0].image}
                alt=""
                className="w-full"
              />
            </Link>
            <p className="mt-8 mb-4 text-base font-medium opacity-70">
              {blogs[0].date}
            </p>
            <Link
              href={{
                pathname: "/blogdetail",
                query: { id: `${blogs[0].id}` },
              }}
            >
              <h3 className="text-2xl font-semibold">{blogs[0].title}</h3>
            </Link>
            <p className="pr-5 mt-2 text-lg opacity-70 mb-9">{blogs[0].desc}</p>
            <Link
              href={{
                pathname: "/blogdetail",
                query: { id: `${blogs[0].id}` },
              }}
              className="hover:underline"
            >
              <div className="flex items-center space-x-3 text-base font-medium">
                <span>Selengkapnya</span>
                <ArrowRight />
              </div>
            </Link>
          </div>
          <ul className="grid content-between w-5/12">
            <RightBlog />
          </ul>
        </div>
        <ul className="flex mt-16 space-x-10">
          <BotBlog />
        </ul>
        <ul id="page" className="flex justify-center space-x-11 mt-[120px]">
          <CoursesPage def>1</CoursesPage>
          <CoursesPage>2</CoursesPage>
          <CoursesPage>3</CoursesPage>
          <CoursesPage titik></CoursesPage>
          <CoursesPage>8</CoursesPage>
        </ul>
      </Container>
      <SectionFooter />
    </>
  );
}
