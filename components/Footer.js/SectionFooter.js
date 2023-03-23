import Container from "../Container";
import FooterDukungan from "./FooterDukungan";
import FooterItemLink from "./FooterItemLink";
import FooterProgram from "./FooterProgram";
import FooterSosmed from "./FooterSosmed";

export default function SectionFooter() {
  return (
    <section id="footer" className="mt-[200px]">
      <div className="w-screen bg-dark-blue pt-[70px] text-white">
        <Container>
          <div className="flex items-start">
            <div className="w-6/12">
              <h4 className="text-2xl font-bold ">
                <a href="#home" className="hover:text-yellow">{`[EDUFREE]`}</a>
              </h4>
              <p className="w-6/12 mt-3 text-base opacity-70">
                Bangun dan wujudkan cita bersama edufree
              </p>
              <div className="rounded-t-[5px] w-8/12 py-[15px] px-[30px] mt-[110px] bg-yellow flex justify-between">
                <div>
                  <p className="font-medium text-lg text-dark-blue mb-[6px]">
                    Email
                  </p>
                  <p className="text-base text-dark-blue/80">
                    contact@website.com
                  </p>
                </div>
                <div>
                  <p className="font-medium text-lg text-dark-blue mb-[6px]">
                    Telephone
                  </p>
                  <p className="text-base text-dark-blue/80">
                    +6288 999 222 333
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between w-6/12">
              <FooterSosmed />
              <FooterProgram />
              <FooterDukungan />
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="flex justify-between py-7">
          <div className="w-3/12">
            <h4 className="text-lg font-medium">
              © Copyright EDUFREE 2021 - 2022
            </h4>
          </div>
          <FooterItemLink />
        </div>
      </Container>
    </section>
  );
}
