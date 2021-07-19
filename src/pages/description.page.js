import React from 'react';
import JobDescription from '../components/jobDescription';
import Sidebar from '../components/sidebar';

function DescriptionPage({ history }) {
  const data = history.location.state
  return (
    <div className="md:flex">
      <Sidebar page="descriptionPage" data={data}/>
      <JobDescription data={data} />
    </div>
  );
}

export default DescriptionPage;
