const Card_1 = () => {
  const companies = [
    {
      name: "Meta",
      logo: "https://www.uctoday.com/wp-content/uploads/2021/12/What-is-Meta.jpg",
      description:
        "Meta Platforms, Inc. is an American technology company developing social media services and virtual reality.",
      hiring: true,
    },
    {
      name: "Amazon",
      logo: "https://assets.upstox.com/content/assets/images/cms/202451/Amazon%20logo.png",
      description:
        "Amazon.com, Inc. is an American multinational company focusing on e-commerce, cloud computing, and digital streaming.",
      hiring: false,
    },
    {
      name: "Apple",
      logo: "https://graphicsprings.com/wp-content/uploads/2023/07/image-58-1024x512.png?x31522",
      description:
        "Apple Inc. is an American multinational technology company designing consumer electronics, software, and services.",
      hiring: true,
    },
    {
      name: "Netflix",
      logo: "https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png",
      description:
        "Netflix, Inc. is an American subscription streaming service and production company.",
      hiring: true,
    },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
      description:
        "Google LLC is an American multinational technology company focusing on search, ads, and cloud computing.",
      hiring: false,
    },
  ];

  return (
    <>
      <div className="flex justify-center flex-col px-10 py-10 gap-10 w-full xl:h-[83vh] bg-[#FFB3B3]">
        <h1 className="text-3xl font-bold text-center">
          <span className="text-[#0068E6]">M</span>
          <span className="text-[#FF9900]">A</span>
          <span className="text-black">A</span>
          <span className="text-[#FF1C0B]">N</span>
          <span className="text-[#34A853]">G</span>&nbsp;Companies
        </h1>
        <div className="flex gap-5 flex-wrap justify-center">

          {/*
          Reusability of components is a key feature of React. Components can be reused multiple times in an application, which helps in keeping the code DRY (Don't Repeat Yourself) and makes it easier to maintain and update the application.
          
          The map function is commonly used to render lists of data by iterating over an array and returning a component for each item. */}
          {companies.map((company, i) => (
            <div
              className="w-64 xl:w-56 h-fit bg-white rounded-md overflow-hidden shadow-md border-2 border-zinc-200"
              key={i}
            >
              <div className="h-32 p-7 border-b-2 border-zinc-200">
                <img
                  className="w-full h-full object-contain"
                  src={company.logo}
                  alt={`${company.name}'s logo`}
                />
              </div>
              <div className="px-5 py-3 ">
                <h1 className="font-semibold text-xl">{company.name}</h1>
                <p className="text-zinc-700 text-sm py-3">
                  {company.description}
                </p>
                <button
                  className={`px-4 text-sm py-2 ${
                    company.hiring ? "bg-emerald-600" : "bg-amber-700"
                  } text-white font-semibold rounded-md`}
                >
                  {/*
                  Conditional rendering allows you to render different components or elements based on certain conditions. It's similar to how conditions work in JavaScript, but applied to the rendering of components.
                  */}
                  {company.hiring ? "Apply Now" : "Stay Tuned"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Card_1;
