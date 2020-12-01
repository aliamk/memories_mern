import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes'

import * as api from '../api'           // import everything from api/index.js as an api bc there'll be lots of calls

// Action Creators (functions that return actions)
// Fetch data from the backend 
// Have useEffect in App.js dispatch it to the reducer

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts()
        dispatch({ type: FETCH_ALL, payload: data })        
    } catch (error) {
        console.log(error)
    }      
} 

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post)
        dispatch({ type: CREATE, payload: data })        
    } catch (error) {
        console.log(error)
    }      
} 

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post)
        dispatch({ type: UPDATE, payload: data })        
    } catch (error) {
        console.log(error)
    }      
} 

export const deletePost = (id) => async (dispatch) => {
    try {
       await api.deletePost(id)
        dispatch({ type: DELETE, payload: id })        
    } catch (error) {
        console.log(error)
    }      
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id)
        dispatch({ type: UPDATE, payload: data })        
    } catch (error) {
        console.log(error)
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