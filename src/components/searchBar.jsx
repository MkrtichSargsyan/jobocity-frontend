import React, { Component } from "react";
import { BsBriefcase } from "react-icons/all";

class SearchBar extends Component {
 
  render() {
    return (
      <div className="searchbar-img w-full relative h-36 md:px-24 px-4 mb-12 flex justify-center items-center rounded">
        <div className="flex flex-1 justify-center items-center relative">
          <form
            className="flex flex-1 justify-center items-center relative"
          >
            <div className="absolute left-4 z-10 text-gray-500">
              {<BsBriefcase />}
            </div>
            <input
              className="py-4 pl-10 w-full main-search rounded"
              type="text"
              placeholder="Search..."
            />
            <button className="text-white bg-blue-700 py-2 md:px-12 px-4 absolute right-0 mr-2 rounded">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
