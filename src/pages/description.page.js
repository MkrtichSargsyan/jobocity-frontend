import React from 'react'
import JobDescription from '../components/jobDescription'
import Sidebar from "../components/sidebar";

function DescriptionPage({history}) {
  return (
    <div className="md:flex">
      <Sidebar page="descriptionPage" />
      <JobDescription data={history.location.state} />
    </div>
  );
}

export default DescriptionPage
