/**
 * App entry point — mounts React into #root.
 * Loads global styles and routes to Home or Product page via App.jsx.
 */
import { createRoot } from "react-dom/client";
import "../pages/prodcut.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);
