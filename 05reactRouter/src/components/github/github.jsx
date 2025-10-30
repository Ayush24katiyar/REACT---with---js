import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {


  const [clicked, setClicked] = useState(false);
  const [data, setdata] = React.useState([]);
  const load_data = useLoaderData()
  
  
  
  
  
  // useEffect(( ) => {
  //   fetch('https://api.github.com/users/ayush24katiyar')
  //   .then((response) => response.json())
  //   .then( data => {
  //       console.log(data);
  //       setdata(data)

  //   })
  // })
  return (
    <div
      className='flex justify-center items-center space-x-8
     min-h-screen ${clicked ? "bg-white" : "bg-transparent"}'
    >
      <img
        src={load_data.avatar_url}
        className="w-72 h-72 rounded-full border-4 border-gray-300 shadow-lg object-cover "
        onClick={() => setClicked(!clicked)}
        alt=""
      />
      <h1 className="text-2xl font-semibold text-gray-900  whitespace-nowrap">
        {load_data.login}
      </h1>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/ayush24katiyar");
  return response.json();
};
