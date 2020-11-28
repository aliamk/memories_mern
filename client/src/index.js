import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'                               // Access the store for state management from anywhere in the app
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'   // see reducers.js > index.js + posts.js

import App from './App'
import './index.css'

const store = createStore(reducers, compose(applyMiddleware(thunk)))


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'))