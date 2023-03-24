export default function CoursesItem({ children, def }) {
  return (
    <li
      className={`py-5 w-full text-center text-lg border-l-white font-medium border border-b cursor-pointer  ${
        def
          ? "border-l-white border-t border-r border-b-white text-royal-blue"
          : "border-r-white border-t-white text-primary/70"
      }`}
      onClick={(e) => {
        const courses = Array.from(document.getElementById("crs").children);
        courses.map((c, i) => {
          c.classList.remove(
            "border-l",
            "border-r",
            "border-t",
            "border-b-white",
            "text-royal-blue"
          );
          c.classList.add(
            "border-l-white",
            "border-r-white",
            "border-t-white",
            "border-b",
            "text-primary/70"
          );
          if (e.target.innerText === c.innerText) {
            c.classList.add(
              "border-l",
              "border-r",
              "border-t",
              "border-b-white",
              "text-royal-blue"
            );
            c.classList.remove(
              "border-l-white",
              "border-r-white",
              "border-t-white",
              "border-b",
              "text-primary/70"
            );
          }
        });
        courses[0].classList.add("border-l-white");
        courses[courses.length - 1].classList.add("border-r-white");
      }}
    >
      {children}
    </li>
  );
}
