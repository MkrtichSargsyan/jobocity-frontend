import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import Job from "../components/job";



class jobsList extends Component {

  handleClick = (job) => {
    console.log('job',job);
    this.props.history.push(`description/${job.id}`, job);
  };

  render() {
    const {jobs} = this.props
    return (
      <div className="flex flex-col flex-1">
        <div className="flex-1 md:ml-8">
          {/* {path && (
              <p className="p-4 my-2 bg-gray-200 text-blue-500">
                Showing {path} Results...
              </p>
            )} */}
  
          {jobs &&
            jobs.map(job => (
              <Job
                key={job.id}
                job={job}
                handleClick={() => this.handleClick(job)}
              />
            ))}
        </div>
      </div>
    );
  }
}


export default withRouter(jobsList);
