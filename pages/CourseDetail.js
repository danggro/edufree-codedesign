import Container from "@/components/Container";
import Header from "@/components/Header";
import HeadDetailCourse from "@/components/Courses/HeadDetailCourse.1";
import SectionFooter from "@/components/Homepage/Footer.js/SectionFooter";
import CoursesItem from "@/components/Courses/CoursesItem";
import GetCourse from "@/components/Courses/GetCourse";
import MainDetailCourse from "@/components/Courses/MainDetailCourse";
import { useRouter } from "next/router";

export default function CourseDetail() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Header first="Kursus" second="Detail Kursus" />
      <Container>
        <HeadDetailCourse idCourse={id} />
        <div className="flex w-10/12 mx-auto">
          <ul id="crs" className="flex justify-between w-full">
            <CoursesItem def>Deskripsi</CoursesItem>
            <CoursesItem>Instruktur</CoursesItem>
            <CoursesItem>Silabus</CoursesItem>
            <CoursesItem>Prasyarat</CoursesItem>
            <CoursesItem>Metode Ajar</CoursesItem>
            <CoursesItem>Testimoni</CoursesItem>
            <CoursesItem>FAQ</CoursesItem>
          </ul>
        </div>
      </Container>
      <MainDetailCourse idCourse={id} />
      <GetCourse />
      <SectionFooter />
    </>
  );
}
