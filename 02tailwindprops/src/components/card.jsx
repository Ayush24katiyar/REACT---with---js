import React from "react";

function Card({name = "ayush"}) {
  return (
    <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
      <div>
        <img
          className="w-48 h-48 md:w-64 md:h-64 object-cover shadow-xl rounded-md"
          alt="Cover"
          src="https://tailwindcss.com/_next/static/media/cover.de1997f7.png"
        />
      </div>

      <div className="flex flex-col items-center md:items-start justify-center">
        <span className="text-2xl font-medium">{name}</span>
        <span className="text-lg font-medium text-sky-500">The Anti-Patterns</span>
        <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
          <span>No. 4</span>
          <span>·</span>
          <span>2025</span>
        </span>
      </div>
    </div>
  );
}

export default Card;
