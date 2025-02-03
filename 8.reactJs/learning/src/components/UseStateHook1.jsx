import { useState } from "react";

// state refers to a built-in object that is used to store property values that belong to a component. When the state object changes, the component re-renders to reflect the new state. This allows for dynamic and interactive user interfaces.

const UseStateHook1 = () => {
  //useState => Is a built-in function that allows components to manage state. It provides a way to declare state variables and update them, enabling dynamic and interactive UI behavior.

  /*
  Count is a variable which stores the value which is defined in 
  useState(value) 
  ex: useState(0) //the value inside the useState will be assigned to the count variable
  */
  //setCount is the function that updates the value of count and store it back to count variable
  var [count, setCount] = useState(0);

  return (
    <>
      <div className="p-10 xl:h-[83vh] justify-center bg-[#ADD8E6] flex flex-col items-center">
        <h1 className="text-2xl mb-10">Count: {count}</h1>
        <div className="flex gap-10 text-xl">
          <button
            className="bg-green-500 cursor-pointer text-white px-5 py-2 rounded-md"

            //In javascript we use 'document.querySelector' to manipulate elements, it is not the recommended practice in React.

            //Instead react uses camelCase for event handlers instead of lowercase (e.g., onClick instead of onclick).
            
            //Directly add event handlers as attributes to JSX elements using camelCase syntax. This is the recommended way to handle events in React.
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>

          <button
            className="px-2 py-1 cursor-pointer bg-amber-400 font-semibold text-white rounded-md"
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};
export default UseStateHook1;
