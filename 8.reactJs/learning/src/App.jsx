import Card_1 from "./components/Card_1";
import DataDrillingViaProps1 from "./components/DataDrillingViaProps1";
import UseStateHook1 from "./components/UseStateHook1";
import UseStateHook2 from "./components/UseStateHook2";

export default function App() {

  return (
    <>
    {/* Components can be thought of as JavaScript functions or classes that return a portion of the UI, typically described using JSX (JavaScript XML).
    
    A component is a reusable piece of code that represents a part of the user interface. They allow you to split the UI into independent, reusable pieces, and think about each piece in isolation
    */}

    <Card_1 />
    <UseStateHook1/>
    <UseStateHook2/>
    <DataDrillingViaProps1/>
    </>
  );
}
