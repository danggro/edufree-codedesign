export default function Category({ children, def }) {
  return (
    <li
      className={`text-lg font-medium  cursor-pointer ${
        def ? "opacity-100" : "opacity-70"
      }`}
      onClick={function (e) {
        const category = Array.from(document.getElementById("ctg").children);
        category.forEach((c) => {
          c.classList.remove("opacity-100");
          c.classList.add("opacity-70");
          if (e.target.innerText === c.innerText) {
            c.classList.add("opacity-100");
          }
        });
      }}
    >
      {children}
    </li>
  );
}
