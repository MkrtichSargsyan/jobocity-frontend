import React from 'react'
import Sidebar from "../components/sidebar";

function DescriptionPage({history}) {
  console.log(history);
  return (
    <div className="md:flex">
      <Sidebar page="descriptionPage" />
      {/* <JobDescription data={data} /> */}
    </div>
  );
}

export default DescriptionPage
