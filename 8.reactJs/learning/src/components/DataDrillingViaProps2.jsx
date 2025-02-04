import PropTypes from "prop-types";

//Accessing the properties as parameters
const DataDrillingViaProps2 = ({ item,index,handleFriends}) => {
  
  //Used destructuring for efficient usage of the elements in the object
  const { name, profession, imgurl, friends } = item;
  return (
    <>
      <div className="w-64 h-80 rounded-md bg-white">
        <img
          className="w-full h-64 rounded-2xl object-cover bg-top-center p-3"
          src={imgurl}
          alt=""
        />
        <div className="px-4 flex justify-between items-center">
          <span>
            <p className="font-semibold text-sm">{name}</p>
            <p className="text-xs">{profession}</p>
          </span>
          <button onClick={()=>{handleFriends(index)}} className=" text-sm bg-blue-600 rounded px-2 py-1 text-white">
            {friends ? "Friends" : "Add Friend"}
          </button>
        </div>
      </div>
    </>
  );
};

//props validation(specifying the type of the prop(s))
DataDrillingViaProps2.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  handleFriends:PropTypes.func,
};

export default DataDrillingViaProps2;
