import * as types from '../types';

const initialState = {
  isOpen: false,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
      };
    case types.CLOSE_MODAL:
        return {
          ...state,
          isOpen: false,
        };
    default:
      return { ...state };
  }
};
