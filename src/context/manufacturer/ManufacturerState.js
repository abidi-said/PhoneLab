import React, { useReducer } from 'react';
import axios from 'axios';
import ManufacturerContext from './manufacturerContext';
import ManufacturerReducer from './manufacturerReducer';
import {
  ADD_MANUFACTURER,
  GET_MANUFACTURER,
  UPDATE_MANUFACTURER,
  SET_LOADING,
  DELETE_MANUFACTURER
} from '../types';

const ManufacturerState = props => {
  const initialState = {
    isAdded: '',
    isUpdated: '',
    isDeleted: '',
    manufacturer: [],
    loading: false
  };
  const [state, dispatch] = useReducer(ManufacturerReducer, initialState);
  const addManufacturer = async name => {
    const res = await axios.post(
      'http://localhost/itelc/public/api/manufacturers',
      {
        name
      }
    );
    console.log(res.data);
    dispatch({
      type: ADD_MANUFACTURER,
      payload: res.data
    });
  };

  const getManufacturer = async () => {
    setLoading();
    const res = await axios.get(
      'http://localhost/itelc/public/api/manufacturers'
    );
    console.log(res.data);
    dispatch({
      type: GET_MANUFACTURER,
      payload: res.data
    });
  };
  const updateManufacturer = async (id, name, newData) => {
    await axios.put(`http://localhost/itelc/public/api/manufacturers/${id}`, {
      name
    });
    console.log(`row ${id} has been updated`);
    // console.log(res.data);

    dispatch({
      type: UPDATE_MANUFACTURER,
      payload: newData
    });
  };

  const delManufacturer = async id => {
    try {
      await axios.delete(
        `http://localhost/itelc/public/api/manufacturers/${id}`
      );
      console.log(`row ${id} has been deleted`);
      // console.log(res.data);

      dispatch({
        type: DELETE_MANUFACTURER,
        payload: id
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <ManufacturerContext.Provider
      value={{
        isAdded: state.isAdded,
        isUpdated: state.isUpdated,
        isDeleted: state.isDeleted,
        loading: state.loading,
        manufacturer: state.manufacturer,
        addManufacturer,
        getManufacturer,
        updateManufacturer,
        delManufacturer
      }}
    >
      {props.children}
    </ManufacturerContext.Provider>
  );
};
export default ManufacturerState;
