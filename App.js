import React from "react";
import ReactDOM from "react-dom/client";

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

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },[
//     React.createElement("h1", {id:"heading"}, "I am h1 tag"),
//   React.createElement("h2",{},"I am h2 tag"),
//   React.createElement("h3",{},React.createElement("h3", {}, "I am h3 header"))
//   ]) // in form of array we can pass siblings content
// );

// console.log(parent)

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello from react development platform"
// );

//JSX -- JSX is not html but it looks like html and xml syntax
//JSX (transpiled beforee it reaches the js engine) -PACEL -Babel
// JSX => Babel transpiled it to React.createElement => ReactElement-JS object => HTMLElemnt(render)
// const jsxHeading = <h1 id = "heading">Namaste React using JSX</h1>
// console.log(jsxHeading)

// const root = ReactDOM.createRoot(document.getElementById("root"));
// for heading rendering
// root.render(heading);

// for parent rendering
// root.render(parent);

// REACT ELEMENT

const heading = <h1 className="heading">Namaste React using JSX🚀🚀</h1>;

// REACT COMPONENT
//React functional component
// for multiple component rendering
const Title = () => (
  <h1 className="head" tabIndex="5">Namste react</h1>
)

const HeadingComponent = () => (
  <div id="container">
    <Title /> // this is also called compnet composition
    <h1>Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(heading);// in this way we can render react element but can not 
// render in this way react component
//for rendering react component we need to render in 
//this way 
root.render(<HeadingComponent />)
