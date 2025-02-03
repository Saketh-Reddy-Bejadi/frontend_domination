import { useForm } from "react-hook-form";

const FormHandlingUseForm = () => {

  //useForm is an object which consists of mainly used two elements in it.
  // register and handleSubmit
  // register => Is a function used to connect inputs to useForm, tracking their values.
  //handleSubmit => Is a function that processes form submissions.

  const { register, handleSubmit } = useForm();

  return (
    <div className="bg-[#FFCCE5] xl:h-[83vh] flex flex-col justify-center items-center p-14">
      <h1 className="font-semibold text-3xl">React Hook Form</h1>
      <form
        action=""
        onSubmit={handleSubmit((data) => console.log(data))}
        className="mt-10 flex flex-wrap justify-center gap-5 xl:gap-10"
      >
        <input
          // This will return an object and the passed argument withe key of the input value..
          {...register("name")}
          className="w-72 border rounded-md px-2 py-2"
          type="text"
          placeholder="john12"
        />
        <input
          {...register("email")}
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
export default FormHandlingUseForm;
