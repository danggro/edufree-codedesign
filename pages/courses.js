import Courses from "@/components/Courses/Courses";
import CtgCourse from "@/components/Courses/CtgCourse";
import SearchCourse from "@/components/Courses/SearchCourse";
import Header from "@/components/Header";
import SectionFooter from "@/components/Homepage/Footer.js/SectionFooter";

export default function courses() {
  return (
    <>
      <Header first="Kursus" />
      <SearchCourse />
      <CtgCourse />
      <Courses />
      <SectionFooter />
    </>
  );
}
