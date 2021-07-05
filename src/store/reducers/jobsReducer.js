import * as types from '../types';


const initialState = {
    jobs:[],
    loading: false,
    error: null,
};

export const jobsReducer = (state = initialState, action) => {

  switch (action.type) {
      case types.FETCH_JOBS_START:
          return {
              ...state,
              loading: true
          };
      case types.FETCH_JOBS_SUCCESS:
          return {
              ...state,
              loading: false,
              jobs: action.jobsList
          };
      case types.FETCH_JOBS_ERROR:
          return {
              ...state,
              loading: false,
              error: action.error
          };
      default :
          return state;
  }
};
