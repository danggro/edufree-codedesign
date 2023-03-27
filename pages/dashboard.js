import Activity from "@/components/Dashboard/Activity";
import MenuDashboard from "@/components/Dashboard/MenuDashboard";
import Overview from "@/components/Dashboard/Overview";
import Statistik from "@/components/Dashboard/Statistik";
import Layout from "@/components/Layout";

export default function dasboard() {
  return (
    <Layout menu={<MenuDashboard />}>
      <div className="flex space-x-[58px]">
        <Overview />
        <Statistik />
      </div>
      <Activity />
    </Layout>
  );
}
