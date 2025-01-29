import { useState } from "react";
import DataDrillingViaProps2 from "./DataDrillingViaProps2";

const DataDrillingViaProps1 = () => {
  const raw = [
    {
      name: "John Doe",
      profession: "Software Engineer",
      imgurl:
        "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: true,
    },
    {
      name: "Jane Smith",
      profession: "Graphic Designer",
      imgurl:
        "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
    {
      name: "Alice Johnson",
      profession: "Product Manager",
      imgurl:
        "https://images.unsplash.com/photo-1507081323647-4d250478b919?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: true,
    },
    {
      name: "Bob Brown",
      profession: "Data Scientist",
      imgurl:
        "https://images.unsplash.com/photo-1618393649689-c997c7455ef5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
  ];

  const [data, setData] = useState(raw);

  const handleFriends = (index) => {
    setData((p) => {
      return p.map((item, i) => {
        if (i === index) {
          return { ...item, friends: !item.friends };
        }
        return item;
      });
    });
  };

  return (
    <>
      <div className="bg-[#995544] flex gap-5 shrink-0 justify-center items-center p-10">
        {data.map((item, index) => (
          // Data drilling via props(short for properties) refers to the process of passing data from a parent component to a child component in React.
          <DataDrillingViaProps2
            key={index}
            item={item}
            index={index}
            handleFriends={handleFriends}
          />
        ))}
      </div>
    </>
  );
};
// Data drilling via props is fundamental in React development as it allows you to create reusable components and manage the flow of data throughout your application. It's a key part of how React components can be composed and structured to manage state and UI efficiently.
export default DataDrillingViaProps1;
