import React from "react";
import ReactDOM from "react-dom/client"

/*
*How the nested element is created in react.
*****suppose we are using this nested scenario
<div id="parent">
  <div id="child">
    <h1></h1>
  </div>
</div

**ReactElement is an objet and its get convert into html
ReactElement(object) => HTML(Browser Understands  )


*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },[ 
    React.createElement("h1", {}, "I am h1 tag"),
  React.createElement("h2",{},"I am h2 tag")
  ]) // in form of array we can pass siblings content  
);

console.log(parent)
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello from react development platform"
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
// for heading rendering
// root.render(heading);

// for parent rendering 
root.render(parent);

