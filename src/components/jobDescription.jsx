import React from "react";
import { AiOutlineClockCircle, BiWorld } from "react-icons/all";

function JobDescription({ data }) {
  const { position, description, company, location, qualifications,company_description, date, logo } =
    data;
  return (
    <div className="flex-1 md:ml-8 bg-white p-6 rounded">
      <div className="flex justify-between items-end md:items-center flex-col md:flex">
        <h1 className="text-indigo-900 md:mr-4 text-md md:text-2xl md:mb-4 font-bold">
          {position}
        </h1>
        <div className="flex items-center ml-2 text-gray-500">
          <AiOutlineClockCircle />
          <p className="ml-2 underline w-max">{date}</p>
          <p className="ml-2 underline w-max"></p>
        </div>
      </div>

      <div className='mb-12'>
        <img
          src={logo}
          alt="logo"
          className="rounded md:w-48 md:h-48 md:mb-4 w-full my-4 md:my-0"
        />
        <div>
          <h2 className="font-roboto text-sm font-bold">{company}</h2>
          <div className="flex py-4">
            <BiWorld />
            <p className="mx-4 align-top">{location}</p>
          </div>
        </div>
      </div>
      <h2 className={'mb-4 font-bold'}>Company description</h2>
      <div className={'mb-12'}>
        {company_description}
      </div>
      <h2 className={'mb-4 font-bold'}>Job description</h2>
      <div className={'mb-12'}>
        {description}
      </div>
      <h2 className={'mb-4 font-bold'}>Qualifications</h2>
      <h3>Required Skills :</h3>
      <div>
        {qualifications.map(el=>(
          <p> - {el} </p>
        ))}
      </div>
    </div>
  );
}

export default JobDescription;
