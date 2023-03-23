import FooterLink from "./FooterLink";

export default function FooterDukungan() {
  return (
    <div className="text-white">
      <h5 className="mb-5 text-xl font-medium">DUKUNGAN</h5>
      <ul>
        <FooterLink href={`/`}>Tentang Kami</FooterLink>
        <FooterLink href={`/`}>Ketentuan</FooterLink>
        <FooterLink href={`/`}>Kebijakan Privasi</FooterLink>
      </ul>
    </div>
  );
}
