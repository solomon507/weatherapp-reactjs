import React from "react";

function TopButton() {
  const cities = [
    {
      id: 1,
      title: "Tirunelveli",
    },
    {
      id: 2,
      title: "Delhi",
    },
    {
      id: 3,
      title: "Mumbai",
    },
    {
      id: 5,
      title: "Chennai",
    },
    {
      id: 4,
      title: "Coimbatore",
    },
  ];
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white  
        text-lg font-medium"
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButton;
