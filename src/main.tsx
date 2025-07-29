import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.tsx";
import WorkshopsPage from "./pages/workshops.tsx";
import { Analytics } from "@vercel/analytics/next";
createRoot(document.getElementById("root")!).render(
  <>
    <Analytics />
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/workshops" element={<WorkshopsPage />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </>,
);
