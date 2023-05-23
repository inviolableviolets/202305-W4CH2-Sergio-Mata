import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App/App";

ReactDOM.createRoot(document.querySelector(".root") as HTMLElement).render(
  <>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </>
);
