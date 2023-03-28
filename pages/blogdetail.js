import HeadDetailBlog from "@/components/Blog/HeadDetailBlog";
import MainDetailBlog from "@/components/Blog/MainDetailBlog";
import Container from "@/components/Container";
import Header from "@/components/Header";
import SectionFooter from "@/components/Homepage/Footer.js/SectionFooter";

export default function blogdetail() {
  return (
    <>
      <Header first="Blog" second="Detail Blog" />
      <Container>
        <HeadDetailBlog />
        <MainDetailBlog />
      </Container>
      <SectionFooter />
    </>
  );
}
