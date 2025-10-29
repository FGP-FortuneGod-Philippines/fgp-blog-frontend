import { Routes, Route } from "react-router";
import MainLayout from "./layout/MainLayout";
import { lazy, Suspense } from "react";
import LoadingSpinner from "./components/LoadingSpinner";

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
          </Route>
        </Routes>
      </Suspense>
    </main>
  );
};

export default App;
