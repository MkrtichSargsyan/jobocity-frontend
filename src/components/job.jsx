import React from "react";

function Job({ handleClick, job }) {
  const { location, company, logo, position, date } = job;

  return (
    <div
      onClick={handleClick}
      className="flex p-4 mb-4 rounded bg-white cursor-pointer
       hover:bg-gray-300 shadow-2xl"
    >
      <div className="w-2/12 mr-4">
        <img src={logo} alt="logo" className="rounded h-24" />
      </div>
      <div className="flex flex-col text-blue-800  w-full">
        <p className="font-roboto text-xs font-bold">{company}</p>
        <p>{position}</p>
        <div className="hidden md:flex justify-between items-end">
          <button className="border rounded border-blue-800 p-2 line">
            Full Time
          </button>
          <div className="flex justify-around">
            <p className="mr-2 font-bold">{location}</p>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Job;
