import Course from "./Icon/Course";
import Dashboard from "./Icon/Dashboard";
import Event from "./Icon/Event";
import Info from "./Icon/Info";
import Setting from "./Icon/Setting";
import MenuItemDashboard from "./MenuItemDashboard";

export default function MenuDashboard() {
  return (
    <div className="mt-10 px-[38px]">
      <ul>
        <MenuItemDashboard icon={<Dashboard />}>Dashboard</MenuItemDashboard>
        <MenuItemDashboard icon={<Course />}>Kursus Saya</MenuItemDashboard>
        <MenuItemDashboard icon={<Event />}>Event Saya</MenuItemDashboard>
        <MenuItemDashboard icon={<Setting />} dropdown>
          Pengaturan
        </MenuItemDashboard>
        <MenuItemDashboard icon={<Info />} dropdown>
          Bantuan
        </MenuItemDashboard>
      </ul>
    </div>
  );
}
