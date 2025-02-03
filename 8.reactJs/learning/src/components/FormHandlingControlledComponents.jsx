import { useState } from "react";

const FormHandlingControlledComponents = () => {

    const [val,setVal]=useState({name:"",email:""});
    const handleSubmit=(e)=>{
        e.preventDefault(); //stops the form from submitting
        console.log(val);
    }

    return (
        <div className="bg-[#B3FFFF] xl:h-[83vh] flex flex-col justify-center items-center p-14">
          <h1 className="font-semibold text-2xl xl:text-3xl">Controlled Components</h1>
          <form action="" onSubmit={handleSubmit} className="mt-10 flex justify-center flex-wrap gap-5 xl:gap-10">
            <input
            //using spread operator and storing the previous value and change the values of the existing keys

            //onChange => Event will be triggered when the value in the element or of the element will be changed..
            onChange={e=>setVal({...val,name:e.target.value})}
              className="w-72 border rounded-md px-2 py-2"
              type="text"
              placeholder="john12"
            />
            <input
              onChange={e=>setVal({...val,email:e.target.value})}
              className="w-72 border px-2 py-2 rounded-md"
              type="email"
              placeholder="john.12@gmail.com"
            />
            <input
              className="bg-emerald-600 border border-black px-7 rounded-md py-2 font-semibold text-white"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      );
};
export default FormHandlingControlledComponents;
