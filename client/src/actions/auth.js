import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

// Action Creators are functions that return functions
export const signin = (formData, history) => async (dispatch) => {
  try {    
    // API calls to the backend to send formData to the database (need to set up endpoints first) 
    history.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    // API calls to the backend to send formData to the database (need to set up endpoints first) 
    history.push('/');
  } catch (error) {
    console.log(error);
  }
};


//    dispatch({ type: AUTH, data });
//    const { data } = await api.signIn(formData);

//     const { data } = await api.signUp(formData);
//     dispatch({ type: AUTH, data });
