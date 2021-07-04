import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchJobs } from "../store/actions";
import Loader from '../components/loader'
import api from "../api";

export class MainPage extends Component {
  async componentDidMount() {
    await this.props.fetchJobs(api);
    console.log(this.props.jobs);
    console.log(this.props.loading);
  }

  render() {
    return <div>{this.props.loading ? <Loader/> : "false"}</div>;
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

export default connect(mapStateToProps, { fetchJobs })(MainPage);
