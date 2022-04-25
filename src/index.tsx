import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter, Routes} from "react-router-dom";
import App from "./components/App";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>

)
