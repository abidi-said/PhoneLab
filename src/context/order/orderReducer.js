import { SET_ORDER, GET_ORDER } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_ORDER:
      return {
        orderManufacturer: action.payload.Manufacturer,
        orderModel: action.payload.Model,
        orderPanne: action.payload.Panne
      };

    case GET_ORDER:
      return action.payload;

    default:
      return state;
  }
};
