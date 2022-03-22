import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { FilterContextProvider, AuthContextProvider } from "./contexts/index";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <FilterContextProvider>
          <App />
        </FilterContextProvider>
      </AuthContextProvider>
    </Router>

  </React.StrictMode>,
  document.getElementById("root")
);
