import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Booking from "./pages/Booking/Booking.jsx";
import Package from "./pages/Package/Package.jsx";
import Content from "./pages/Content/Content.jsx";
import Settings from "./pages/Settings/Settings.jsx";
import LandingDesc from "./pages/LandingDesc/LandingDesc.jsx";
import FeaturesAdd from "./pages/FeaturesAdd/FeaturesAdd.jsx";
import AboutDesc from "./pages/AboutDesc/AboutDesc.jsx";
import GalleryUpload from "./pages/GalleryUpload/GalleryUpload.jsx";
import AddFaqs from "./pages/AddFaqs/AddFaqs.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
    <Route path="" element={<Booking />} />
    <Route path="package" element={<Package />} />
    <Route path="content" element={<Content />} />
    <Route path="content/landingdesc" element={<LandingDesc />} />
    <Route path="content/features" element={<FeaturesAdd />} />
    <Route path="content/aboutdesc" element={<AboutDesc />} />
    <Route path="content/gallery" element={<GalleryUpload />} />
    <Route path="content/faqs" element={<AddFaqs />} />
    <Route path="settings" element={<Settings />} />
    <Route path="*" element={<NotFound />} />
  </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
