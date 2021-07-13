import * as types from '../types';

const initialState = {
  isOpen: false,
  loginIsOpen: false,
  registerIsOpen: false,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_MODAL:
      return {
        ...state,
        // isOpen: true,
        [action.payload]:true
      };
    case types.CLOSE_MODAL:
        return {
          ...state, 
          isOpen: false,
          loginIsOpen:false,
          registerIsOpen:false
        };
    default:
      return { ...state };
  }
};
