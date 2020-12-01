import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes'

// Reducers are functions that accept state and action as parameters 
// Actions tell reducers what to do
// State type has to always be specified
// Because in this app the state is always POST, we can change 'state' to 'posts = []'
// Just need to export this function to reducer > index.js

export default (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload
        case CREATE:
            // when user clicks the submit button, the data gets stored in the payload
            return [ ...posts, action.payload]  
        case UPDATE:
        // case LIKE:
            // action.payload represents the updated version of the post: if the post's id matches the new updated post's id, return the updated post, else return the old post
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case DELETE:
            // return all posts except for the one whose ID doesn't match those in the action.payload
            return posts.filter((post) => post._id !== action.payload);
        default:
            return posts;
    }
}


/* 
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return state
            break;
        case 'CREATE':
            return state
        default:
            break;
    }
}
*/