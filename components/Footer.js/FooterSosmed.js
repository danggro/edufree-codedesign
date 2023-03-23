import FooterLink from "./FooterLink";

export default function FooterSosmed() {
  return (
    <div className="text-white">
      <h5 className="mb-5 text-xl font-medium">Sosial Media</h5>
      <ul>
        <FooterLink href={`http://www.instagram.com`}>Instagram</FooterLink>
        <FooterLink href={`http://www.twitter.com`}>Twitter</FooterLink>
        <FooterLink href={`http://www.linkedin.com`}>LinkedIn</FooterLink>
      </ul>
    </div>
  );
}
