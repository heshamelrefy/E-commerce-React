import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
// import { createStore } from 'redux';



let count = 0
export function increse() {
  return {
    type :'INC'
  }
}
export function decrese() {
  return {
    type :'DEC'
  }
}

//reducer
function counter(prevState= count,action) {
  switch (action.type) {
    case 'INC':
      return prevState + 1

      case 'DEC':
        return prevState - 1
        default :
        return prevState;
    
  }
  
}

// store
let store = createStore(counter)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


