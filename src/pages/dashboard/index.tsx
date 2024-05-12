import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Dashboard() {
  return (
    <div className="w-full">
      {/* <h1>Dashboard</h1>
      this is a text */}
      <Navbar />
      <Sidebar />
    </div>
  );
}
