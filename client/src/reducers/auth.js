import { AUTH, LOGOUT } from '../constants/actionTypes';

// Get user profile from Actions > Auth.js and set it to localStorage

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
        localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
        return { ...state, authData: action?.data };
    case LOGOUT:
        localStorage.clear();
        return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducer;



// return { ...state, authData: action.data, loading: false, errors: null };

// 


// return { ...state, authData: null, loading: false, errors: null };