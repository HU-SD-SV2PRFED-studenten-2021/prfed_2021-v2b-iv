import { createStore } from 'https://cdn.skypack.dev/@reduxjs/toolkit@^1.2.3';
import { reducer } from './filter-reducer.js';


export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);
