import Category from "../Category";

export default function CtgBlog() {
  return (
    <ul id="ctg" className="flex justify-center space-x-10">
      <Category def>Semua</Category>
      <Category>Tips & Tricks</Category>
      <Category>Event</Category>
      <Category>Berita</Category>
      <Category>Soft Skill</Category>
      <Category>Hard Skill</Category>
      <Category>Tutorial</Category>
    </ul>
  );
}
