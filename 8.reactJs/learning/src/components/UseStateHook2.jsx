import { useState } from "react";

const UseStateHook2 = () => {
  const [status, setStatus] = useState({ name: "JavaScript", online: false });
  var { name, online } = status;

  const [nums, setNums] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <>
      {/*
        Using useState in reference types (object)
        Adding or modifiying the object will not re-render the component, so we need to use the spread operator to create a new object and update the state.
      */}
      <div className="flex flex-col gap-5 text-xl items-center bg-[#B2F0B2] p-20 xl:h-[83vh] justify-center">
        <p>Name: {name}</p>
        <p>Online: {online ? "Yes" : "No"}</p>
        <button
          className={`px-3 py-1.5 font-semibold rounded-xl text-white ${
            online ? "bg-red-500" : "bg-blue-500"
          }`}
          onClick={() => setStatus({ ...status, online: !online })}
        >
          {online ? "Go Offline" : "Go Online"}
        </button>
      </div>

      {/*
        Using useState in reference types (array) 
        Adding or modifiying the array will not re-render the component, so we need to use the spread operator to create a new array and update the state.
      */}
      <div className="flex flex-col py-10  bg-[#FFFFB3] items-center xl:h-[83vh] ">
        <h2 className="py-4 text-xl font-semibold">Stack Implementation</h2>
        <div className={`${nums.length > 0 ? "border" : ""}`}>
          {nums.reverse().map((num, i) => (
            <h1 className="text-xl border-b px-5 py-2" key={i}>
              {num}
            </h1>
          ))}
        </div>
        <div className="flex gap-5">
          {/* Removing the element using filter and updating the state.. */}
          <button
            onClick={() => {
              nums.length > 0 ? setNums(nums.filter((n, i) => i != 0)) : null;
            }}
            className={`mt-5 px-3 py-3 text-white font-semibold text-xl rounded ${
              nums.length > 0 ? "bg-fuchsia-900" : "bg-red-900"
            }`}
          >{`${nums.length > 0 ? "Pop Element" : "No Elements Left"}`}</button>
          {/* Adding the element using spread operator and updating the state.. */}
          <button
            onClick={() => {
              nums.length < 7 ? setNums([nums.length + 1, ...nums]) : null;
            }}
            className={`mt-5 w-40 text-white font-semibold text-xl rounded ${
              nums.length < 7 ? "bg-fuchsia-900" : "bg-red-900"
            }`}
          >{`${nums.length < 7 ? "Add an Element" : "Can't Add"}`}</button>
        </div>
      </div>
    </>
  );
};
export default UseStateHook2;
