import Image from "next/image";
import { useEffect, useState } from "react";
import mockCourses from "../../utils/Courses.json";

export default function HeadDetailCourse() {
  const [courses, setCourses] = useState(mockCourses);
  return (
    <>
      {courses.map((course) => {
        if (course.id === "1") {
          return (
            <div
              key={course.id}
              className="w-10/12 mx-auto mt-[124px] mb-[50px]"
            >
              <h4 className="text-2xl font-medium opacity-80">
                {course.category}
              </h4>
              <h3 className="font-semibold text-[42px] mt-[10px] mb-2">
                {course.title}
              </h3>
              <p className="text-base font-medium opacity-70">{course.desc}</p>
              <div className="relative mt-[72px] ">
                <Image
                  src={course.image}
                  width="1078"
                  height="641"
                  alt=""
                  className="bg-cover"
                />
                <div className="absolute top-0 bottom-0 flex items-center justify-center w-full bg-fit bg-black/60">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="109"
                    height="123"
                    fill="none"
                    viewBox="0 0 109 123"
                    className="cursor-pointer"
                  >
                    <path
                      fill="#FCD980"
                      d="M.439 5.287C.372 1.438 4.496-1.04 7.862.827l98.468 54.58c3.366 1.867 3.45 6.677.151 8.66L9.978 122.05c-3.3 1.983-7.507-.35-7.574-4.198L.439 5.287z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}
