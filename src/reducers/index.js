import {goodReducer} from './goodReducer'
import {goodTypeReducer} from './goodTypeReducer'
import {combineReducers} from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
    good: goodReducer,
    goodType: goodTypeReducer
})
