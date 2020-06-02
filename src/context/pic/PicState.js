import React, { useReducer } from 'react';
import axios from 'axios';
import PicContext from './picContext';
import PicReducer from './picReducer';
import {
  ADD_PIC,
  GET_PIC,
  UPDATE_PIC,
  SET_LOADING,
  DELETE_PIC
} from '../types';

const PicState = props => {
  const initialState = {
    isAdded: '',
    isUpdated: '',
    isDeleted: '',
    pic: [],
    loading: false
  };
  const [state, dispatch] = useReducer(PicReducer, initialState);
  const addPic = async name => {
    const res = await axios.post('http://localhost/itelc/public/api/photos', {
      name
    });
    console.log(res.data);
    dispatch({
      type: ADD_PIC,
      payload: res.data
    });
  };

  const getPic = async () => {
    setLoading();
    const res = await axios.get('http://localhost/itelc/public/api/photos');
    console.log(res.data);
    dispatch({
      type: GET_PIC,
      payload: res.data
    });
  };
  const updatePic = async (id, name, newData) => {
    await axios.put(`http://localhost/itelc/public/api/photos/${id}`, {
      name
    });
    console.log(`row ${id} has been updated`);
    // console.log(res.data);

    dispatch({
      type: UPDATE_PIC,
      payload: newData
    });
  };

  const delPic = async id => {
    try {
      await axios.delete(`http://localhost/itelc/public/api/photos/${id}`);
      console.log(`row ${id} has been deleted`);
      // console.log(res.data);

      dispatch({
        type: DELETE_PIC,
        payload: id
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <PicContext.Provider
      value={{
        isAdded: state.isAdded,
        isUpdated: state.isUpdated,
        isDeleted: state.isDeleted,
        loading: state.loading,
        pic: state.pic,
        addPic,
        getPic,
        updatePic,
        delPic
      }}
    >
      {props.children}
    </PicContext.Provider>
  );
};
export default PicState;
