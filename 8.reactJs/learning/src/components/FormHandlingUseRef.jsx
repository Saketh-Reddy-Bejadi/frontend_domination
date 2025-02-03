import { useRef } from "react";

const FormHandlingUseRef = () => {

  //useRef => Used to access DOM elements and store data across renders without affecting the performance..

  //The default vale of the useRef will be null. Because the element will not be rendering at the point this line execution..
  const username = useRef(null);
  const email = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    //username.current will store a reference to the actual DOM element, allowing you to interact with it directly...
    console.log(`Username: ${username.current.value}`);
    console.log(`Email: ${email.current.value}`);
  };

  return (
    <div className="bg-[#DAB3FF] xl:h-[83vh] flex flex-col justify-center items-center p-14">
      <h1 className="font-semibold text-3xl">useRef</h1>
      <form action="" onSubmit={handleSubmit} className="mt-10 flex flex-wrap justify-center gap-5 xl:gap-10">
        <input
        // ref => used to link the element to the useRef. 
          ref={username}
          className="w-72 border rounded-md px-2  py-2"
          type="text"
          placeholder="john12"
        />
        <input
          ref={email}
          className="w-72 border px-2 py-2 rounded-md"
          type="email"
          placeholder="john.12@gmail.com"
        />
        <input
          className="bg-emerald-600 px-7 border border-black rounded-md py-2 font-semibold text-white"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};
export default FormHandlingUseRef;
