import React from 'react'

function Sidebar({page}) {
  return (
    <>
      {page === "mainPage" && (
        <aside className="md:w-1/3 mb-4">
          <div className="pl-2 mb-4">
           <p className='cursor-pointer font-extrabold w-auto hover:text-blue-500'>See All Job postings</p>
          </div>
          <h3 className="text-lg text-gray-700 font-bold pb-2">Path</h3>
          <div className="flex flex-col pl-2">
            <div className="py-2">
             <p className="cursor-pointer text-blue-600 font-medium">Full Stack Developer</p>
            </div>
            <div className="py-2">
              <p className="cursor-pointer text-blue-600 font-medium">Front End Developer</p>
            </div>
            <div className="py-2">
             <p tabIndex="0" className="cursor-pointer text-blue-600 font-medium">Back End Developer</p>
            </div>
          </div>
        </aside>
      )}
      
    </>
  );
}

export default Sidebar
