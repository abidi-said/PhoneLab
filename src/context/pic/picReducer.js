import {
  ADD_PIC,
  GET_PIC,
  UPDATE_PIC,
  SET_LOADING,
  DELETE_PIC
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_PIC:
      return {
        ...state,
        // isAdded: action.payload
        pic: [action.payload, ...state.pic]
      };
    case GET_PIC:
      return {
        ...state,
        pic: action.payload
      };
    case DELETE_PIC:
      return {
        ...state,
        pic: state.pic.filter(m => m.id !== action.payload)
      };
    case UPDATE_PIC:
      return {
        ...state,
        pic: state.pic.map(m =>
          m.id === action.payload.id ? action.payload : m
        )
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};
