import { Link, NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import PropTypes from "prop-types";

const Navbar = ({ navbar, setNavbar }) => {
  return (
    <>
      <div className="xl:hidden flex py-5 items-center px-10 justify-between">
        <NavLink to={"/"}>
          <p className="font-semibold text-2xl">SimpleProjects</p>
        </NavLink>
        <CiMenuFries onClick={() => setNavbar(!navbar)} size={25} />
      </div>
      <nav
        onClick={() => setNavbar(!navbar)}
        className={`${
          navbar ? "" : "hidden"
        } h-screen xl:h-fit sm:flex flex-wrap py-5 px-5 md:py-2 md:flex items-center justify-evenly  bg-[#f0c3ee]`}
      >
        <NavLink to={"/"}>
          <p className="font-semibold text-xl xl:border-0 border-b border-zinc-400 py-5">
            Home
          </p>
        </NavLink>
        <div className="py-5 border-b xl:border-0 border-zinc-400">
          <p className="mb-2 font-semibold text-xl md:text-md">
            useState & component
          </p>
          <span className="xl:flex justify-center items-center gap-2">
            <NavLink to="/component">
              {/* Applying the style based on the active state of the NavLink by the function syntax inside NavLink */}
              {(e) => (
                <button
                  className={`border p-2 border-zinc-400 rounded-xl font-semibold cursor-pointer ${
                    e.isActive ? "text-[#FF9900]" : "text-black"
                  }`}
                >
                  Cards
                </button>
              )}
            </NavLink>

            <br />
            {/* Applying the style based on the active state of the NavLink using className */}
            <NavLink
              className={(e) =>
                `${
                  e.isActive ? "bg-[#ffabbb]" : ""
                }  text-zinc-800 border p-2 rounded-xl font-semibold border-zinc-400 cursor-pointer`
              }
              to={"/use_state1"}
            >
              useState1
            </NavLink>
            <br />
            {/* Applying the style based on the active state of the NavLink using style attribute */}
            <NavLink to={"/use_state2"}>
              {(e) => (
                <button
                  className="border p-2 rounded-xl font-semibold text-zinc-800 border-zinc-400 cursor-pointer"
                  style={{ color: e.isActive ? "blue" : "" }}
                >
                  useState2
                </button>
              )}
            </NavLink>
          </span>
        </div>
        <div className="py-5 border-b xl:border-0 border-zinc-400">
          <p className="mb-2 font-semibold text-xl md:text-md ">
            Data Drilling
          </p>
          <span className="flex justify-center items-center gap-2">
            <Link to={"/data_drilling1"}>
              <button className="border border-zinc-400 p-2 rounded-xl font-semibold text-zinc-800 cursor-pointer">
                Data_Drilling1
              </button>
            </Link>
          </span>
        </div>
        <div className="py-5 border-b xl:border-0 border-zinc-400">
          <p className="mb-2 font-semibold text-xl md:text-md">Form Handling</p>
          <span className="xl:flex justify-center items-center gap-2">
            <NavLink to={"/use_ref"}>
              <button className="border p-2 rounded-xl font-semibold border-zinc-400 text-zinc-800 cursor-pointer">
                useRef_Handling
              </button>
            </NavLink>
            <br />
            <NavLink to={"/controlled"}>
              <button className="border p-2 rounded-xl font-semibold text-zinc-800 border-zinc-400 cursor-pointer mt-2">
                Controlled_Components
              </button>
            </NavLink>
            <br />
            <NavLink to={"/use_form"}>
              <button className="border p-2 rounded-xl border-zinc-400 font-semibold text-zinc-800 cursor-pointer mt-2">
                useForm_Handling
              </button>
            </NavLink>
          </span>
        </div>
        <div>
          <p className="mb-2 font-semibold text-xl md:text-md">Form Handling</p>
          <NavLink to={"/users"}>
            <button className="border p-2 rounded-xl border-zinc-400 font-semibold text-zinc-800 cursor-pointer mt-2">
              Users
            </button>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  navbar: PropTypes.bool,
  setNavbar: PropTypes.func,
};

export default Navbar;
