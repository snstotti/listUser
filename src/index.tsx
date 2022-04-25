import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter, HashRouter, Routes} from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";
import App from "./components/App";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router basename={process.env.PUBLIC_URL}>
        <App />
    </Router>

)
