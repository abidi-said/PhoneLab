import {
  ADD_PANNE,
  GET_PANNE,
  UPDATE_PANNE,
  SET_LOADING,
  DELETE_PANNE
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_PANNE:
      return {
        ...state,
        // isAdded: action.payload
        panne: [action.payload, ...state.panne]
      };
    case GET_PANNE:
      return {
        ...state,
        panne: action.payload
      };
    case DELETE_PANNE:
      return {
        ...state,
        panne: state.panne.filter(m => m.id !== action.payload)
      };
    case UPDATE_PANNE:
      return {
        ...state,
        panne: state.panne.map(p =>
          p.id === action.payload.id ? action.payload : p
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
