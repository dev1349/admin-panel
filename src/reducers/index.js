import {goodReducer} from './goodReducer'
import {goodTypeReducer} from './goodTypeReducer'
import {combineReducers} from '@reduxjs/toolkit'
import {headerReducer} from './headerReducer'
import {addCategoryReducer} from './addCategoryReducer'

export const rootReducer = combineReducers({
    good: goodReducer,
    goodType: goodTypeReducer,
    header: headerReducer,
    addCategory: addCategoryReducer,
})
