# Namaste React

 # Parcel package

 -Dev Build
 - local server
 - HMR - HOT MODULE REPLACEMENT
 - Filse watching algoriths -- written in c++
 - image optimization
 - Minification
 - Bundling
 - Compress
 - Consistent hoisting
 - Code splitting
 - Didderential bundling - support older browser
 - Diagnostics
 - Error handling
 - HTTPs
 - Tree shaking - remove unused code
 - Different dev and prod bundles

 // Importance of adding script in package.json
 -when we run npm start then behind the scene execute the parcel package which act as npm parcel index.html

 //Importance of babel
 - it is used to convert piece of code into React element.
 - it also help in make compatible code for older versions
 -Javascript compiler

 // for giving attributes in JSX we need to use camel case
 // if we are writing multiple lines in JSX then we need to wrap in this bracket ( )
 /////////////////REACT COMPONENT/////////////////
 -Class Based componet -OLD
 -Functional baseed component - New

 ***React functional component >> a javascript function which returns the JSX code or react element is called functional component.

 /////////////////////////////////////////////
 /*
*How the nested element is created in react.
*****suppose we are using this nested scenario
<!-- <div id="parent">
  <div id="child">
    <h1></h1>
  </div>
</div -->

**ReactElement is an objet and its get convert into html
ReactElement(object) => HTML(Browser Understands  )


*/
/**
//////////////////////////////////////////////////////
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

<!-- const heading = <h1 className="heading">Namaste React using JSX🚀🚀</h1>; -->

// REACT COMPONENT
//React functional component
// for multiple component rendering
const Title = () => (
  <!-- <h1 className="head" tabIndex="5">Namste react</h1> -->
)

const HeadingComponent = () => (
  <!-- <div id="container">
    <Title /> // this is also called compnet composition
    <h1>Namaste React Functional Component</h1>
  </div> -->
);
*/

//  root.render(heading);// in this way we can render react element but can not
// render in this way react component
//for rendering react component we need to render in
//this way
// root.render(<HeadingComponent />);
 //////////////////////////////////////////////
 Passing a props is just like passing a arguments to the function.
 >>Prop is object


 //Food ordering app
 / Food delivery application
/**
 * Header
 * - Logo
 * -Nav Items
 * Body
 * -Search
 * -Restaurent container
 *   - Restaurent card
 *      - Img
 *      - Name of rest , start rating, cuisines etc.
 * Footer
 * -copyright
 * -links
 * -Address
 * -Contact
 */

/*


 .............//////*  // not using keys(not acceptable) <<< index as key <<<<<<< unique id(best practice) */


 //////////////////

 Two types of export/import
 ****-Default export/import*****

 export default component:-
 -export default component;
 -import component from "path" 

 ****Named export/import
 -export const component
 -import {component} rom "path"

 # React hooks
 -Normal js utility function
 - useStae()--used to create state variables;
 -useEffect()

 # When ever a state is changed  then react is re render the component

 # Reconcilation algorithm (React Fiber) >>read it