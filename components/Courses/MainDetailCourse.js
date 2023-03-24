import Container from "../Container";
import mockCourses from "../../utils/Courses.json";
import { useState } from "react";
import Image from "next/image";

export default function MainDetailCourse({ idCourse }) {
  const [courses, setCourses] = useState(mockCourses);
  return (
    <Container>
      <div className="w-8/12 mt-[100px] mx-auto px-5">
        <h4 className="text-[32px] font-medium">Tentang Kursus</h4>
        <p className="mt-3 text-base opacity-70 leading-[27px]">
          Pemrograman web atau web programming adalah istilah yang berkaitan
          erat dengan website dan internet. Mengapa begitu? Karena web
          programming adalah salah satu proses pembuatan website untuk keperluan
          internet yang biasanya disebut dengan istilah WWW atau world wide web.
          Istilah WWW banyak dikenal karena bagaimanapun adalah layanan internet
          paling populer saat ini.
          <br />
          <br />
          Dalam kursus ini kamu akan diajarkan cara mebuat web dengan standar
          industri. Disini kamu akan diajarkan tentang Html, Css dan Javascript
          yang merupakan pondasi dasar dalam pembuatan website.
          <br />
          <br />
          Manfaat belajar pemograman website adalah :
        </p>
        <ul className="opacity-70">
          <li>1. Mampu menjalankan bisnis aplikasi dan software</li>
          <li>2. Dapat membangun website sendiri</li>
          <li>3. Menunjang karir</li>
        </ul>
        {courses.map((course) => {
          if (course.id === `${idCourse}`) {
            return (
              <Image
                src={course.image}
                width="842"
                height="392"
                alt=""
                className="my-[34px] bg-cover w-full"
                key={course.id}
              />
            );
          }
        })}
        <h4 className="text-[32px] font-medium">Target dan Sasaran Siswa</h4>
        <ul className="mt-3 opacity-70">
          <li>1. Mampu menjalankan bisnis aplikasi dan software</li>
          <li>2. Dapat membangun website sendiri</li>
          <li>3. Menunjang karir</li>
        </ul>
        <h4 className="text-[32px] font-medium mt-6">Spesifikasi & Software</h4>
        <ul className="mt-3 opacity-70">
          <li>1. Mampu menjalankan bisnis aplikasi dan software</li>
          <li>2. Dapat membangun website sendiri</li>
          <li>3. Menunjang karir</li>
        </ul>
      </div>
    </Container>
  );
}
