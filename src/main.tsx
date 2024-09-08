import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { worker } from "@/mocks";

if (process.env.NODE_ENV === "development") {
  worker.start({
    onUnhandledRequest: "warn",
    serviceWorker: {
      url: "/task-calendar/mockServiceWorker.js",
    },
  });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
