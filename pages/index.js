import SectionAbout from "@/components/About/SectionAbout";
import SectionBlog from "@/components/Blog/SectionBlog";
import SectionCourse from "@/components/Course/SectionCourse";
import SectionFAQ from "@/components/FAQ/SectionFAQ";
import SectionFlexing from "@/components/Flexing/SectionFlexing";
import SectionFooter from "@/components/Footer.js/SectionFooter";
import SectionHero from "@/components/Hero/SectionHerp";
import Navbar from "@/components/Nav/Navbar";
import SectionRegistration from "@/components/Registration/SectionRegistration";
import SectionReview from "@/components/Review/SectionReview";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Edufree | Belajar Otomatis Cuy</title>
      </Head>
      <Navbar />
      <SectionHero />
      <SectionFlexing />
      <SectionAbout />
      <SectionCourse />
      <SectionReview />
      <SectionFAQ />
      <SectionRegistration />
      <SectionBlog />
      <SectionFooter />
    </>
  );
}
