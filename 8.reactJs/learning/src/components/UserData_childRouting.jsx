import {useNavigate, useParams } from "react-router-dom";

const UserData_childRouting = () => {
  //useParams is used to get the parameters from the url
  const { name } = useParams(); 
  const navigate=useNavigate();
  const goBackHandler=() =>{
    navigate("/users") //can be used to navigate to any router path that is created
    navigate(-1) //can be used to navigate to the previous page
    navigate(-2) //can be used to navigate to the last 2nd previous page

  }

  return <div className="flex flex-col justify-center items-center w-full h-[78vh] gap-10">
  <h1 className="text-5xl font-semibold" >Hi, {name.toString()[0].toUpperCase()+name.toString().slice(1)}</h1>
  <button onClick={goBackHandler} className="px-4 py-2 rounded-2xl border bg-amber-200 hover:bg-amber-300" >Go back</button>
  </div>;
};
export default UserData_childRouting;
