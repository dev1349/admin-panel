import {
    DELETE_GOOD_SUCCESS,
    GET_ALL_GOOD_SUCCESS,
    GET_GOOD_SUCCESS,
    POST_GOOD_SUCCESS,
    PUT_GOOD_SUCCESS
} from '../actions/actionTypes'


export function goodReducer(state = '', action) {
    switch (action.type) {
        case POST_GOOD_SUCCESS:
            return {
                ...state,
                allGood: [...state.allGood, action.payload]
            }
        case GET_GOOD_SUCCESS:
            return {
                ...state,
                currentGood: action.payload
            }
        case GET_ALL_GOOD_SUCCESS:
            return {
                ...state,
                allGood: action.payload
            }
        case PUT_GOOD_SUCCESS:
            return state
        case DELETE_GOOD_SUCCESS:
            return {
                ...state,
                allGood: [...state.allGood.filter((item) => item.id !== action.payload.id)]
            }
        default:
            return state
    }
}