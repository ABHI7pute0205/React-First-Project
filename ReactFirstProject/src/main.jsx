import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// eith create root mhanje element create kelya sarkh ek root element create kela and tyat index.html madhla root name cha element access kela and jo kahi App name ch function ye te tya page var ti render means display kel
// we call a function like that also
createRoot(document.getElementById("root")).render(App());
// also call like that
createRoot(document.getElementById("root")).render(<App />);
