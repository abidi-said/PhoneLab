import React, { useReducer } from 'react';
import axios from 'axios';
import PanneContext from './panneContext';
import PanneReducer from './panneReducer';
import {
  ADD_PANNE,
  GET_PANNE,
  UPDATE_PANNE,
  SET_LOADING,
  DELETE_PANNE
} from '../types';

const PanneState = props => {
  const initialState = {
    isAdded: '',
    isUpdated: '',
    isDeleted: '',
    panne: [],
    loading: false
  };
  const [state, dispatch] = useReducer(PanneReducer, initialState);

  const addPanne = async newData => {
    const res = await axios.post(
      'http://localhost/itelc/public/api/defects',
      newData
    );
    console.log(res.data);
    dispatch({
      type: ADD_PANNE,
      payload: res.data
    });
  };

  const getPanne = async () => {
    setLoading();
    const res = await axios.get('http://localhost/itelc/public/api/defects');
    console.log(res.data);
    dispatch({
      type: GET_PANNE,
      payload: res.data
    });
  };
  const updatePanne = async (id, newData) => {
    await axios.put(`http://localhost/itelc/public/api/defects/${id}`, newData);
    console.log(`row ${id} has been updated`);
    // console.log(res.data);

    dispatch({
      type: UPDATE_PANNE,
      payload: newData
    });
  };

  const delPanne = async id => {
    try {
      await axios.delete(`http://localhost/itelc/public/api/defects/${id}`);
      console.log(`row ${id} has been deleted`);
      // console.log(res.data);

      dispatch({
        type: DELETE_PANNE,
        payload: id
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <PanneContext.Provider
      value={{
        isAdded: state.isAdded,
        isUpdated: state.isUpdated,
        isDeleted: state.isDeleted,
        loading: state.loading,
        panne: state.panne,
        addPanne,
        getPanne,
        updatePanne,
        delPanne
      }}
    >
      {props.children}
    </PanneContext.Provider>
  );
};
export default PanneState;
