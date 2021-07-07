import React from 'react'
import { Link } from "react-router-dom";
import { IoReturnDownBackOutline } from "react-icons/all";

function Sidebar({page}) {
  return (
    <>
     {page === "descriptionPage" && (
        <aside className="md:w-1/3 mb-4 flex flex-col md:block justify-center">
          <div className="flex pb-4 items-center mb-12">
            <IoReturnDownBackOutline />
            <Link to="/" className="mx-4">Back to search page</Link>
          </div>
          
          <a href={'#'} target="_blank" rel='noreferrer' className="mx-auto px-6 py-3 text-white bg-blue-600 rounded-md font-bold">Apply to This Position</a>
        </aside>
      )}
      {page === "mainPage" && (
        <aside className="md:w-1/3 mb-4">
          <div className="pl-2 mb-4">
           <p className='cursor-pointer font-extrabold w-max hover:text-blue-500'>See All Job postings</p>
          </div>
          <h3 className="text-lg text-gray-700 font-bold pb-2">Path</h3>
          <div className="flex flex-col pl-2">
            <div className="py-2">
             <p className="cursor-pointer text-blue-600 font-medium w-max">Full Stack Developer</p>
            </div>
            <div className="py-2">
              <p className="cursor-pointer text-blue-600 font-medium w-max">Front End Developer</p>
            </div>
            <div className="py-2">
             <p tabIndex="0" className="cursor-pointer text-blue-600 font-medium w-max">Back End Developer</p>
            </div>
          </div>
        </aside>
      )}
      
    </>
  );
}

export default Sidebar
