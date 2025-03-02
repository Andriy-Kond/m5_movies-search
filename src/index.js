import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/m5_movies-search">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

// import { Notify } from "notiflix/build/notiflix-notify-aio";

// Notify.init({
//   width: "300px",
//   position: "right-bottom",
//   timeout: 2000,
// clickToClose: false,
// cssAnimationStyle: "from-right",
// });

// Notify.success("Sol lucet omnibus");
// Notify.failure("Qui timide rogat docet negare");
// Notify.warning("Memento te hominem esse");
// Notify.info("Cogito ergo sum");
