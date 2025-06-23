import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hiiii"),
    React.createElement("h2", {}, "H2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hiiii"),
    React.createElement("h2", {}, "H2"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading", class: "head" },
  "Hello World from javascript!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
