import Category from "../Category";

export default function CtgCourse() {
  return (
    <ul id="ctg" className="flex justify-center space-x-10">
      <Category def>Semua</Category>
      <Category>UI Design</Category>
      <Category>Programming</Category>
      <Category>Marketing</Category>
      <Category>Soft Skill</Category>
      <Category>Network</Category>
      <Category>Data Analyst</Category>
    </ul>
  );
}
