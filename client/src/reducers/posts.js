// Reducers are functions that accept state and action as parameters 
// Actions tell reducers what to do
// State type has to alwways be specified
// Because in this app the state is always POST, we can change 'state' to posts
// Just need to export this function to reducer > index.js

export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE':
            return [ ...posts, action.payload]  // when user clicks the submit button, the data gets stored in the payload
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