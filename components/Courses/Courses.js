import { useState } from "react";
import mockCourses from "../../utils/Courses.json";

import Container from "../Container";
import CardCourse from "../Homepage/Course/CardCourse";
import CoursesPage from "./CoursesPage";

export default function Courses() {
  const [courses, setCourses] = useState(mockCourses);
  return (
    <Container>
      <div className="flex flex-wrap -mx-9 mt-[184px]">
        {courses.map((course) => (
          <div className="w-4/12 px-9">
            <CardCourse
              star={course.star}
              image={course.image}
              title={course.title}
              desc={course.desc}
              time={course.time}
              video={course.video}
              siswa={course.siswa}
              courses
            />
          </div>
        ))}
      </div>
      <ul id="page" className="flex justify-center space-x-11">
        <CoursesPage def>1</CoursesPage>
        <CoursesPage>2</CoursesPage>
        <CoursesPage>3</CoursesPage>
        <CoursesPage titik></CoursesPage>
        <CoursesPage>8</CoursesPage>
      </ul>
    </Container>
  );
}
