import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { devToolsEnhancer } from 'redux-devtools-extension';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let initialState = {
    counter: 1,
    todolist: ['ppp']
}

function redux(state, action) {
    state = state || initialState
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, counter: state.counter + 1 }
        case 'DECREMENT':
            return { ...state, counter: state.counter - 1 }
        case 'ADDTODO':
            return { ...state, todolist: _.concat(state.todolist,action.payload.todo)}
       case 'REMOVETODO':
            return { ...state, todolist: _.filter(state.todolist, (item,index)=> index !== action.payload.index)}
        default:
            return state
    }
}
// devToolsEnhancer 启用redux-dev-tools
let store = createStore(redux, devToolsEnhancer())


ReactDOM.render( <Provider store={store} ><App / ></Provider> , document.getElementById('root'));
registerServiceWorker();