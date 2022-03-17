import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {FilterContextProvider} from "./contexts/filterContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <FilterContextProvider>
        <App />
      </FilterContextProvider>
    </Router>
   
  </React.StrictMode>,
  document.getElementById("root")
);
