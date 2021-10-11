import {
    POST_ATTRIBUTE_SUCCESS,
    DELETE_ATTRIBUTE_SUCCESS,
    PUT_CHECK,
    GET_ALL_ATTRIBUTE_SUCCESS,
    PUT_ATTRIBUTE_SUCCESS,
    CHANGE_ADD_ATTRIBUTE_ITEM,
} from '../actions/actionTypes'

const initialState = {
    allAttribute:[
        {
            id: 0,
            status: false,
            name: 'вес',
            nameEng: 'weight',
            group: 'grop1',
            sortingOrder: '1',
        },
        {
            id: 1,
            status: false,
            name: 'пол',
            nameEng: '',
            group: 'grop2',
            sortingOrder: '3',
        },
        {
            id: 2,
            status: false,
            name: 'сезон',
            nameEng: '',
            group: 'grop3',
            sortingOrder: '2',
        }
    ],
    attributeItem: {
        name: '',
        attributeGroup: {
            id: null,
            name: ''
        },
        attributeType: {}
    }
}

export function attributeReducer(state= initialState, action){
    switch (action.type){
        case POST_ATTRIBUTE_SUCCESS:
            return {
                ...state,
                allAttribute: [...state.allAttribute, action.payload]
            }
        case PUT_ATTRIBUTE_SUCCESS:
            return {
                ...state,
                allAttribute: [...state.allAttribute.map((el)=> {

                    if(el.id === action.payload.elementId) {
                        el.name = action.payload.data.nameEng
                    }
                    return el // Если все работает попробовать написать через тернарный оператор
                })]
            }
        case DELETE_ATTRIBUTE_SUCCESS:
            return {
                ...state,
                allAttribute: [...state.allAttribute.filter((item) => item.id !== action.payload.id)]
            }
        case PUT_CHECK:
            return {
                ...state,
                allAttribute: [...state.allAttribute.map((el)=> {
                    if(el.id !== (+action.payload)) return el
                    el.status = !el.status
                    return el
                })]
            }
        case GET_ALL_ATTRIBUTE_SUCCESS:
            return {
                ...state,
                allAttribute: action.payload
            }
        case CHANGE_ADD_ATTRIBUTE_ITEM:
            return {
                ...state,
                attributeItem: {...state.attributeItem, ...action.payload},
            }
        default:
            return state

    }

}