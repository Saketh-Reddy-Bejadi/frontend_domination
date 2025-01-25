import { useState } from "react";

const UseStateHook = () => {

    var [count,setCount]=useState(0);

    

  return (
    <>
        <div className="p-10 bg-zinc-300 flex flex-col items-center" >
            <h1 className="text-2xl mb-10" >Count: {count}</h1>
           <div className="flex gap-10">
              <button className="bg-green-500 cursor-pointer text-white px-5 py-2 rounded-md" onClick={()=>setCount(count+1)} >Increment</button> 
             
              <button className="px-2 py-1 cursor-pointer bg-amber-400 font-semibold text-white rounded-md" onClick={()=>setCount(count-1)}>Decrement</button>
           </div>
        </div>
    </>
  );
};
export default UseStateHook;
