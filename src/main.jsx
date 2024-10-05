/**
 * @copyright 2024 Shubham-Mi
 * @license Apache-2.0
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "lenis/dist/lenis.css";
import "react-vertical-timeline-component/style.min.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
