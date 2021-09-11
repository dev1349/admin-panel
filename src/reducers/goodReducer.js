import {
    CHANGE_GOOD_FILTER, CREATE_FILTERED_GOOD,
    DELETE_GOOD_SUCCESS,
    GET_ALL_GOOD_SUCCESS,
    GET_GOOD_SUCCESS,
    POST_GOOD_SUCCESS,
    PUT_GOOD_SUCCESS
} from '../actions/actionTypes'

const initialState = {
    allGood: [
        {
            id: 0,
            name: 'model01',
            description: 'description of model01',
            goodType: {
                id: 0,
                name: 'type01'
            },
            attributeValueSet: [
                {
                    id: 0,
                    attribute: {
                        id: 0,
                        name: 'attribute01'
                    },
                    value: 'value01'
                },
                {
                    id: 1,
                    attribute: {
                        id: 1,
                        name: 'attribute02'
                    },
                    value: 'value02'
                },
            ],
            price: 2500,
            salePrice: 2300,
            weight: 0,
            length: 0,
            height: 0,
            width: 0,
            model: 'model01',
            count: 56,
            status: false,
            imageStatus: false
        },
        {
            id: 1,
            name: 'model02',
            description: 'description of model02',
            goodType: {
                id: 0,
                name: 'type02'
            },
            attributeValueSet: [
                {
                    id: 0,
                    attribute: {
                        id: 0,
                        name: 'attribute01'
                    },
                    value: 'value01'
                },
                {
                    id: 1,
                    attribute: {
                        id: 1,
                        name: 'attribute02'
                    },
                    value: 'value02'
                },
            ],
            price: 5500,
            salePrice: 5300,
            weight: 0,
            length: 0,
            height: 0,
            width: 0,
            model: 'model01',
            count: 23,
            status: true,
            imageStatus: true
        },
        {
            id: 2,
            name: 'model03',
            description: 'description of model03',
            goodType: {
                id: 1,
                name: 'type03'
            },
            attributeValueSet: [
                {
                    id: 0,
                    attribute: {
                        id: 0,
                        name: 'attribute01'
                    },
                    value: 'value01'
                },
                {
                    id: 1,
                    attribute: {
                        id: 1,
                        name: 'attribute02'
                    },
                    value: 'value02'
                },
                {
                    id: 2,
                    attribute: {
                        id: 1,
                        name: 'attribute02'
                    },
                    value: 'value02'
                },
            ],
            price: 6500,
            salePrice: 5300,
            weight: 0,
            length: 0,
            height: 0,
            width: 0,
            model: 'model03',
            count: 56,
            status: true,
            imageStatus: true
        },
    ],
    filter: {
        name: '',
        price: null,
        status: null,
        model: '',
        count: null,
        imageStatus: null,
        "goodType.name": '',
    },
    filteredGood: [],
}


export function goodReducer(state = initialState, action) {
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
        case CHANGE_GOOD_FILTER:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    ...action.payload
                }
            }
        case CREATE_FILTERED_GOOD:
            return {
                ...state,
                filteredGood: [ ...action.payload ]
            }
        default:
            return state
    }
}