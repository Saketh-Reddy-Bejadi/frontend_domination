import Routing from "./utlis/Routing";
import Navbar from "./components/Navbar";
import { useState } from "react";

export default function App() {
  const [navbar,setNavbar]=useState(false);
  return (
    <>
      {/*
        Components can be thought of as JavaScript functions or classes that return a portion of the UI, typically described using JSX (JavaScript XML).
    
        A component is a reusable piece of code that represents a part of the user interface. They allow you to split the UI into independent, reusable pieces, and think about each piece in isolation
      */}
    

      <Navbar navbar={navbar} setNavbar={setNavbar} />
      {/* Conditionally performing the rendering and the roting opeartions */}
      {!(navbar && window.innerWidth <= 768) && <Routing/>}
    </>
  );
}
