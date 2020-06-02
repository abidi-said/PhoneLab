import {
  ADD_MANUFACTURER,
  GET_MANUFACTURER,
  UPDATE_MANUFACTURER,
  SET_LOADING,
  DELETE_MANUFACTURER
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_MANUFACTURER:
      return {
        ...state,
        // isAdded: action.payload
        manufacturer: [action.payload, ...state.manufacturer]
      };
    case GET_MANUFACTURER:
      return {
        ...state,
        manufacturer: action.payload
      };
    case DELETE_MANUFACTURER:
      return {
        ...state,
        manufacturer: state.manufacturer.filter(m => m.id !== action.payload)
      };
    case UPDATE_MANUFACTURER:
      return {
        ...state,
        manufacturer: state.manufacturer.map(m =>
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
