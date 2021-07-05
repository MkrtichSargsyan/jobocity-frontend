import React from "react";
import Job from "../components/job";

function jobsList({ jobs }) {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex-1 md:ml-8">
     

        {jobs &&
          jobs.map(({ id, ...props }) => (
            <Job
              key={id}
              {...props}
            />
          ))}
      </div>
    </div>
  );
}

export default jobsList;
