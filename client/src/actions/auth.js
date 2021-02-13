import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

// Triggered by the handleSubmit method in components > Auth.js.
// Dispatch formData to the backend by triggering an api call in api > index.js
// Response sent back from backend and the data property object deconstructed here
// Pass data response to the reducer in SRC > REDUCERS > AUTH.JS

// Action Creators are functions that return functions
export const signin = (formData, history) => async (dispatch) => {
  try {    
    const { data } = await api.signIn(formData);    
    dispatch({ type: AUTH, data });
    history.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData); 
    dispatch({ type: AUTH, data });
    history.push('/');
  } catch (error) {
    console.log(error.message);
  }
};