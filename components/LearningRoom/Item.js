import Title from "./Title";

export default function Item({ title, children }) {
  return (
    <div className="mb-5">
      <Title>{title}</Title>
      <ul>{children}</ul>
    </div>
  );
}
