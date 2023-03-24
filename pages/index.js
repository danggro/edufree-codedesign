import SectionAbout from "@/components/Homepage/About/SectionAbout";
import SectionBlog from "@/components/Homepage/Blog/SectionBlog";
import SectionCourse from "@/components/Homepage/Course/SectionCourse";
import SectionFAQ from "@/components/Homepage/FAQ/SectionFAQ";
import SectionFlexing from "@/components/Flexing/SectionFlexing";
import SectionFooter from "@/components/Homepage/Footer.js/SectionFooter";
import SectionHero from "@/components/Homepage/Hero/SectionHerp";
import Navbar from "@/components/Homepage/Nav/Navbar";
import SectionRegistration from "@/components/Homepage/Registration/SectionRegistration";
import SectionReview from "@/components/Homepage/Review/SectionReview";
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
