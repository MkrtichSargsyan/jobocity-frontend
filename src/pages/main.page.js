import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchJobs, chooseJob } from "../store/actions";
import api from "../api";
import Loader from "../components/loader";
import SearchBar from "../components/searchBar";
import Sidebar from "../components/sidebar";
import JobList from "../components/jobsList";

export class MainPage extends Component {
  async componentDidMount() {
    await this.props.fetchJobs(api);
  }

  render() {
    const { jobs } = this.props;

    return (
      <>
        <SearchBar />
        <div className="flex flex-col md:flex-row">
          <Sidebar page="mainPage"/>
          {jobs.length ? <JobList jobs={jobs} chooseJob={this.props.chooseJob}/> : <Loader />}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { jobsReducer } = state;
  return {
    jobs: jobsReducer.jobs,
    loading: jobsReducer.loading,
    error: jobsReducer.error,
  };
};

export default connect(mapStateToProps, { fetchJobs, chooseJob })(MainPage);
