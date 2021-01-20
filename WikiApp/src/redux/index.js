import { configureStore, combineReducers } from 'https://cdn.skypack.dev/@reduxjs/toolkit@1.2.3';

import popup from './popup.js'


const store = configureStore({
    reducer: combineReducers({
        popup,
    })
})

store.subscribe(() => {
    const popup = store.getState().popup
})

export default store