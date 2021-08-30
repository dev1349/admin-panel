import {combineReducers, configureStore} from '@reduxjs/toolkit'
import toolkitSlice from './toolkitSlice'
import logger from 'redux-logger'


const rootReducer = combineReducers({
    toolkit: toolkitSlice
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})