import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // this strict mode is helpful in production
  <StrictMode>
    <App />
  </StrictMode>
);
