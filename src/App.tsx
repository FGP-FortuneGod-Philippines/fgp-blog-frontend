import { Routes, Route } from "react-router";
import MainLayout from "./layout/MainLayout";
import { lazy, Suspense } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import News from "./pages/News";
import TrustedPartners from "./pages/TrustedPartners";
import ContactUs from "./pages/ContactUs";

const HomePage = lazy(() => import("./pages/HomePage"));
const Chairman = lazy(() => import("./pages/Chairman"));
const Announcement = lazy(() => import("./pages/Announcement"));

const App = () => {
  return (
    <main>
      <Suspense fallback={<LoadingSpinner className="size-6" />}>
        <Routes>
          {/* Main Layout */}
          <Route element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/chairman" element={<Chairman />} />
            <Route path="/announcement" element={<Announcement />} />
            <Route path="/news" element={<News />} />
            <Route path="/partners" element={<TrustedPartners />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Route>
        </Routes>
      </Suspense>
    </main>
  );
};

export default App;
