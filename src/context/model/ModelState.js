import React, { useReducer } from 'react';
import axios from 'axios';
import ModelContext from './modelContext';
import ModelReducer from './modelReducer';
import {
  ADD_MODEL,
  GET_MODEL,
  UPDATE_MODEL,
  SET_LOADING,
  DELETE_MODEL
} from '../types';

const ModelState = props => {
  const initialState = {
    isAdded: '',
    isUpdated: '',
    isDeleted: '',
    model: [],
    loading: false
  };
  const [state, dispatch] = useReducer(ModelReducer, initialState);
  const addModel = async newData => {
    const res = await axios.post(
      'http://localhost/itelc/public/api/modeles',
      newData
    );
    console.log(res.data);
    dispatch({
      type: ADD_MODEL,
      payload: res.data
    });
  };

  const getModel = async () => {
    setLoading();
    const res = await axios.get('http://localhost/itelc/public/api/modeles');
    console.log(res.data);
    dispatch({
      type: GET_MODEL,
      payload: res.data
    });
  };
  const updateModel = async (id, newData) => {
    await axios.put(`http://localhost/itelc/public/api/modeles/${id}`, newData);
    console.log(`row ${id} has been updated`);
    // console.log(res.data);

    dispatch({
      type: UPDATE_MODEL,
      payload: newData
    });
  };

  const delModel = async id => {
    try {
      await axios.delete(`http://localhost/itelc/public/api/modeles/${id}`);
      console.log(`row ${id} has been deleted`);
      // console.log(res.data);

      dispatch({
        type: DELETE_MODEL,
        payload: id
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <ModelContext.Provider
      value={{
        isAdded: state.isAdded,
        isUpdated: state.isUpdated,
        isDeleted: state.isDeleted,
        loading: state.loading,
        model: state.model,
        addModel,
        getModel,
        updateModel,
        delModel
      }}
    >
      {props.children}
    </ModelContext.Provider>
  );
};
export default ModelState;
