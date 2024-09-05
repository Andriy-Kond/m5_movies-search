import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

// import { Notify } from "notiflix/build/notiflix-notify-aio";

// Notify.success("Sol lucet omnibus");
// Notify.failure("Qui timide rogat docet negare");
// Notify.warning("Memento te hominem esse");
// Notify.info("Cogito ergo sum");

// Notify.init({
//   width: "300px",
//   position: "right-bottom",
//   timeout: 2000,
// clickToClose: false,
// cssAnimationStyle: from-right,
// });
