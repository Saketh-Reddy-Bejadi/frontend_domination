import { Link, Outlet } from "react-router-dom";

const Users_childRouting = () => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center font-semibold  w-full h-[78vh] gap-5">
        <Link to={"/users/typescript"}>
          <button className="hover:bg-green-400 bg-green-300 cursor-pointer border px-6 py-3 rounded">
            Typescript
          </button>
        </Link>
        <Link to={"/users/javascript"}>
          <button className="hover:bg-green-400 bg-green-300 cursor-pointer border px-6 py-3 rounded">
            Javascript
          </button>
        </Link>
        <Link to={"/users/python"}>
          <button className="hover:bg-green-400 bg-green-300 cursor-pointer border px-6 py-3 rounded">
            Python
          </button>
        </Link>
      </div>
      {/* It is used in the context of nested routes to render child routes. */}
      <Outlet />
      {/* When you define nested routes in your application, the <Outlet /> component acts as a placeholder where the child routes will be rendered. It allows you to create a layout for parent routes and dynamically display the appropriate child route content based on the current URL.
       */}
    </>
  );
};
export default Users_childRouting;
