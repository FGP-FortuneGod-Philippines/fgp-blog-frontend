import { Routes, Route } from "react-router";
import { lazy, Suspense } from "react";

import MainLayout from "./layout/MainLayout";
import LoadingSpinner from "./components/LoadingSpinner";

const HomePage = lazy(() => import("./pages/HomePage"));
const Chairman = lazy(() => import("./pages/Chairman"));
const Announcement = lazy(() => import("./pages/Announcement"));
const AnnouncementDetails = lazy(() => import("./pages/AnnouncementDetails"));
const News = lazy(() => import("./pages/News"));
const TrustedPartners = lazy(() => import("./pages/TrustedPartners"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const NotFound = lazy(() => import("./pages/NotFound"));
const JMR = lazy(() => import("./pages/TrustedPartners/JMR") )

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
            <Route
              path="/announcement/:slug/:id"
              element={<AnnouncementDetails />}
            />
            <Route path="/news" element={<News />} />
            <Route path="/partners" element={<TrustedPartners />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />

            {/* Trusted Partners */}
            <Route path="/jmr" element={<JMR/>}/>
          </Route>
        </Routes>
      </Suspense>
    </main>
  );
};

export default App;
