import React, { useReducer } from 'react';
import OrderContext from './orderContext';
import OrderReducer from './orderReducer';
import { SET_ORDER } from '../types';
const OrderState = (props) => {
  const initialState = {
    orderManufacturer: '',
    orderModel: '',
    orderPanne: '',
    loading: false,
  };

  const [state, dispatch] = useReducer(OrderReducer, initialState);

  const setOrder = (Manufacturer, Model, Panne) => {
    dispatch({
      type: SET_ORDER,
      payload: { Manufacturer, Model, Panne },
    });
  };

  return (
    <OrderContext.Provider
      value={{
        orderManufacturer: state.orderManufacturer,
        orderModel: state.orderModel,
        orderPanne: state.orderPanne,
        setOrder,
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};
export default OrderState;
