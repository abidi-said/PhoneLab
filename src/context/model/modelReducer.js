import {
  ADD_MODEL,
  GET_MODEL,
  UPDATE_MODEL,
  SET_LOADING,
  DELETE_MODEL
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_MODEL:
      return {
        ...state,
        // isAdded: action.payload
        model: [action.payload, ...state.model]
      };
    case GET_MODEL:
      return {
        ...state,
        model: action.payload
      };
    case DELETE_MODEL:
      return {
        ...state,
        model: state.model.filter(m => m.id !== action.payload)
      };
    case UPDATE_MODEL:
      return {
        ...state,
        model: state.model.map(m =>
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
