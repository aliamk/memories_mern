import * as api from '../api'           // import everything from api/index.js as an api bc there'll be lots of calls

// Action Creators (functions that return actions)
// Fetch data from the backend 
// Have useEffect in App.js dispatch it to the reducer

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts()
        dispatch({ type: 'FETCH_ALL', payload: data })        
    } catch (error) {
        console.log(error.message)
    }      
} 

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post)
        dispatch({ type: 'CREATE', payload: data })        
    } catch (error) {
        console.log(error.message)
    }      
} 

/*
const getPosts = () => async (dispatch) => {

    const action = { type: 'FETCH_ALL', payload: [] }
    
    dispatch(action)
} */

// PAYLOAD: where the data (posts) are stored
// Because our fetch calls are async, we need to account for delays in action dispatches
// So we use Thunk and get the getPosts function to return an async dispatch function: => async (dispatch) =>