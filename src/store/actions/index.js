import * as types from "../types";

import axios from "axios";

export const fetchJobs = (url) => {
  return async (dispatch) => {
    
    dispatch(fetchJobsStart());

    try {
      const response = await axios.get(url);
      dispatch(fetchJobsSuccess(response.data));
    } catch (e) {
      dispatch(fetchJobsError(e));
    }
  };
};

const fetchJobsStart = () => {
  return {
    type: types.FETCH_JOBS_START,
  };
};

const fetchJobsSuccess = (jobsList) => {
  return {
    type: types.FETCH_JOBS_SUCCESS,
    jobsList,
  };
};

const fetchJobsError = (e) => {
  return {
    type: types.FETCH_JOBS_ERROR,
    error: e,
  };
};
