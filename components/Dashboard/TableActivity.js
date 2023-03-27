import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import mockCourses from "../../utils/Courses.json";
import Button from "../Button";
import TableCourse from "../Courses/TableCourse";

export default function TableActivity() {
  const [courses, setCourses] = useState(mockCourses);

  //   useEffect(() => {
  //     console.log(courses);
  //   }, []);

  return (
    <table className="w-full mt-5 ">
      <thead className="text-sm text-left text-primary/30">
        <tr className="border-b ">
          <th className="pb-3 font-medium">Nama Kursus</th>
          <th className="pb-3 font-medium">Progress</th>
          <th className="pb-3 font-medium text-center">Status</th>
        </tr>
      </thead>
      <tbody className="py-10 ">
        {courses.map((c) => {
          if (c.progress > 0) {
            return (
              <tr key={c.id}>
                <td>
                  <TableCourse title={c.title} desc={c.desc} image={c.image} />
                </td>
                <td className="w-[200px] ">
                  <div className="">
                    <p className="text-sm text-right opacity-90mr-10">
                      {c.progress}%
                    </p>
                    <div className="h-2 rounded-full bg-secondary/70">
                      <div
                        className="h-2 rounded-full bg-primary"
                        style={{
                          width: `${c.progress}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="text-center ">
                  {c.progress < 100 ? (
                    <Link
                      href="/learningroom"
                      className="text-base text-royal-blue hover:underline"
                    >
                      Lanjutkan
                    </Link>
                  ) : (
                    <button className="py-3 font-semibold border rounded-lg border-yellow px-7 bg-yellow hover:bg-white hover:text-yellow">
                      Sertifikat
                    </button>
                  )}
                </td>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
}
