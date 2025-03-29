import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Iridescence from "../ui/Iridescence/Iridescence.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <App />
  </StrictMode>
);
