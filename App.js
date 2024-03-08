import React from "react";
import ReactDOM  from "react-dom/client";

const Title = () => {
 return <h1 className="head">Namaste react using JSX</h1>
};
 
const Titlex = (
  <h1>sanket is sexy</h1>
)


const HeadingComponent = () =>(
  <div id="container">
    {Titlex}
    <h2>{100+200}</h2>
    <Title/>
   <h1 className="heaiding">Namaste react functional component</h1>
  </div>
 );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
