import React from 'react'
import { AiOutlineClockCircle, BiWorld } from "react-icons/all";

function JobDescription() {
  return (
    <div className="flex-1 md:ml-8 bg-white p-6 rounded">
      <div className="flex justify-between items-end md:items-center flex-col md:flex">
        <h1 className="text-indigo-900 md:mr-4 text-md md:text-2xl md:mb-4 font-bold">
          {/* {position} */}
          postition
        </h1>
        <div className='flex items-center ml-2 text-gray-500'>
        <AiOutlineClockCircle />
        {/* <p className="ml-2 underline w-max">{date}</p> */}
        <p className="ml-2 underline w-max">date</p>
      </div>
      </div>
      
      <div>
        <img
          src={logo}
          alt="logo"
          className="rounded md:w-48 md:mb-4 w-full my-4 md:my-0"
        />
        <div>
          <h2 className="font-roboto text-sm font-bold">{name}</h2>
          <div className="flex py-4">
          <BiWorld />
          <p className="mx-4 align-top">{location}</p>
          </div>
        </div>
      </div>
      <div id="description" dangerouslySetInnerHTML={{__html: description}}></div>
    </div>
  );
}

export default JobDescription
