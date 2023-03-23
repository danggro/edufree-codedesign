import FooterLink from "./FooterLink";

export default function FooterProgram() {
  return (
    <div className="text-white">
      <h5 className="mb-5 text-xl font-medium">Program</h5>
      <ul>
        <FooterLink href={`/`}>Merdeka Belajar</FooterLink>
        <FooterLink href={`/`}>Finterpreneur</FooterLink>
      </ul>
    </div>
  );
}
