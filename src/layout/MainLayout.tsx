import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import ScrollToHash from "@/components/ScrollToHash";
import ScrollToTop from "@/components/ScrollToTop";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="relative flex flex-col justify-center items-center h-auto">
      <ScrollToHash />
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default MainLayout;
