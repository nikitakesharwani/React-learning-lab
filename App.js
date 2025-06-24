import React from "react";
import ReactDOM from "react-dom/client";

//Component Composition - is putting component inside another component.

const TitleComponent = () => <h1>Namaste React from Title Component🚀</h1>;

const HeadingComponent = () => (
  <div id="container">
    <TitleComponent />
    <h1>Namaste React from React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading) --> This is how a element is rendered
root.render(<HeadingComponent />); //This is how a component is rendered
