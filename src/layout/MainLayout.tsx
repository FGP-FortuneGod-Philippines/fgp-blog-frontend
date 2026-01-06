import { lazy, Suspense } from "react";
import { Outlet } from "react-router";

const ScrollToHash = lazy(() => import("@/components/ScrollToHash"));
const Navbar = lazy(() => import("@/components/navbar/Navbar"));
const Footer = lazy(() => import("@/components/Footer"));
const ScrollToTop = lazy(() => import("@/components/ScrollToTop"));

const MainLayout = () => {
  return (
    <div className="relative flex flex-col justify-center items-center h-auto">
      <Suspense fallback={null}>
        <ScrollToHash />
        <Navbar />
        <Outlet />
        <Footer />
        <ScrollToTop />
      </Suspense>
    </div>
  );
};

export default MainLayout;
