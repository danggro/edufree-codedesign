import Layout from "@/components/Layout";
import CoreLearningRoom from "@/components/LearningRoom/CoreLearningRoom";
import MenuLearningRoom from "@/components/LearningRoom/MenuLearningRoom";

export default function LearningRoom() {
  return (
    <>
      <Layout menu={<MenuLearningRoom />}>
        <CoreLearningRoom />
      </Layout>
    </>
  );
}
