import { useRef } from "react";

const FormHandlingUseRef = () => {
  const username = useRef(null);
  const email = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Username: ${username.current.value}`);
    console.log(`Email: ${email.current.value}`);
  };

  return (
    <div className="bg-[#DAB3FF] flex flex-col justify-center items-center p-14">
      <h1 className="font-semibold text-3xl">useRef</h1>
      <form action="" onSubmit={handleSubmit} className="mt-10 flex flex-wrap justify-center gap-5 xl:gap-10">
        <input
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
