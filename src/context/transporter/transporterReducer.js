import {
  ADD_TRANSPORTER,
  GET_TRANSPORTER,
  UPDATE_TRANSPORTER,
  SET_LOADING,
  DELETE_TRANSPORTER
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_TRANSPORTER:
      return {
        ...state,
        // isAdded: action.payload
        transporter: [action.payload, ...state.transporter]
      };
    case GET_TRANSPORTER:
      return {
        ...state,
        transporter: action.payload
      };
    case DELETE_TRANSPORTER:
      return {
        ...state,
        transporter: state.transporter.filter(m => m.id !== action.payload)
      };
    case UPDATE_TRANSPORTER:
      return {
        ...state,
        transporter: state.transporter.map(m =>
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
