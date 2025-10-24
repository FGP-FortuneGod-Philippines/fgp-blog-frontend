import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="relative flex flex-col justify-center items-center h-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
