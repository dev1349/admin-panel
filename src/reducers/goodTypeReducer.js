import {
    DELETE_GOOD_TYPE_SUCCESS,
    GET_ALL_GOOD_TYPE_SUCCESS,
    GET_GOOD_TYPE_SUCCESS,
    POST_GOOD_TYPE_SUCCESS,
    PUT_GOOD_TYPE_SUCCESS
} from '../actions/actionTypes'


export function goodTypeReducer(state = '', action) {
    switch (action.type) {
        case POST_GOOD_TYPE_SUCCESS:
            return {
                ...state,
                allGoodType: [...state.allGoodType, action.payload]
            }
        case GET_GOOD_TYPE_SUCCESS:
            return {
                ...state,
                currentGoodType: action.payload
            }
        case GET_ALL_GOOD_TYPE_SUCCESS:
            return {
                ...state,
                allGoodType: action.payload
            }
        case PUT_GOOD_TYPE_SUCCESS:
            return state
        case DELETE_GOOD_TYPE_SUCCESS:
            return {
                ...state,
                allGoodType: [...state.allGoodType.filter((item) => item.id !== action.payload.id)]
            }
        default:
            return state
    }
}