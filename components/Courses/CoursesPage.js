export default function CoursesPage({ children, def, titik }) {
  return (
    <>
      {titik ? (
        <li className="flex items-end justify-center font-bold tracking-widest text-primary/50 text-24">
          . . .
        </li>
      ) : (
        <li
          className={`font-semibold cursor-pointer  w-[50px] h-[50px] rounded-[5px]  flex justify-center text-2xl items-center ${
            def ? "bg-yellow text-white" : "bg-secondary text-primary/50"
          }
          `}
          onClick={(e) => {
            const page = Array.from(document.getElementById("page").children);
            page.forEach((p, i) => {
              p.classList.remove("text-white", "bg-yellow");
              p.classList.add("bg-secondary", "text-primary/50");
              if (e.target.innerText === p.innerText) {
                p.classList.add("text-white", "bg-yellow");
                p.classList.remove("text-primary/50", "bg-secondary");
              }
            });
            page[3].classList.remove("bg-secondary");
          }}
        >
          {children}
        </li>
      )}
    </>
  );
}
