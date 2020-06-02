import React, { useReducer } from 'react';
import axios from 'axios';
import TransporterContext from './transporterContext';
import TransporterReducer from './transporterReducer';
import {
  ADD_TRANSPORTER,
  GET_TRANSPORTER,
  UPDATE_TRANSPORTER,
  SET_LOADING,
  DELETE_TRANSPORTER
} from '../types';

const TransporterState = props => {
  const initialState = {
    isAdded: '',
    isUpdated: '',
    isDeleted: '',
    transporter: [],
    loading: false
  };
  const [state, dispatch] = useReducer(TransporterReducer, initialState);
  const addTransporter = async name => {
    const res = await axios.post(
      'http://localhost/itelc/public/api/transporters',
      {
        name
      }
    );
    console.log(res.data);
    dispatch({
      type: ADD_TRANSPORTER,
      payload: res.data
    });
  };

  const getTransporter = async () => {
    setLoading();
    const res = await axios.get(
      'http://localhost/itelc/public/api/transporters'
    );
    console.log(res.data);
    dispatch({
      type: GET_TRANSPORTER,
      payload: res.data
    });
  };
  const updateTransporter = async (id, name, newData) => {
    await axios.put(`http://localhost/itelc/public/api/transporters/${id}`, {
      name
    });
    console.log(`row ${id} has been updated`);
    // console.log(res.data);

    dispatch({
      type: UPDATE_TRANSPORTER,
      payload: newData
    });
  };

  const delTransporter = async id => {
    try {
      await axios.delete(
        `http://localhost/itelc/public/api/transporters/${id}`
      );
      console.log(`row ${id} has been deleted`);
      // console.log(res.data);

      dispatch({
        type: DELETE_TRANSPORTER,
        payload: id
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <TransporterContext.Provider
      value={{
        isAdded: state.isAdded,
        isUpdated: state.isUpdated,
        isDeleted: state.isDeleted,
        loading: state.loading,
        transporter: state.transporter,
        addTransporter,
        getTransporter,
        updateTransporter,
        delTransporter
      }}
    >
      {props.children}
    </TransporterContext.Provider>
  );
};
export default TransporterState;
