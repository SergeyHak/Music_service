import React from "react";
import ReactDOM from "react-dom/client";
// import Login from "../src/js/Login/Login.js"
// import Registration from "./js/Registration/Registration.js";
import App from "./App.js";
// import NotFound from "../src/js/NotFound/NotFound"
import {BrowserRouter} from "react-router-dom"
import GlobalStyle from "./style/styleGlobal.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalStyle />
    {/* <NotFound/> */}
     {/* <Login/> */}
    {/* <Registration/>  */}
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
