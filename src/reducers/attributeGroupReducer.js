import {
    CHANGE_ADD_ATTRIBUTE_GROUP_FIELDS,
    CHANGE_ATTRIBUTE_GROUP_FETCH_STATUS,
    CHANGE_ATTRIBUTE_GROUP_MODE, CHANGE_SORT_ORDER,
    RESET_ADD_ATTRIBUTE_GROUP_FIELDS,
    RESET_ID_ARRAY_FOR_DELETING,
    SET_ATTRIBUTE_GROUP,
    SET_NEW_ID_ARRAY_FOR_DELETING, SORT_ATTRIBUTE_GROUP,
} from '../actions/actionTypes'


const initialState = {
    attributeGroupItems: [],
    fetchStatus: 'idle',
    attributeGroupMode: 'list',
    addAttributeGroupFields: {
        name: '',
        uaName: '',
        sortOrder: null,
    },
    forDeleting: [],
    sortOrder: 'none',
}

export function attributeGroupReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ATTRIBUTE_GROUP:
            return {
                ...state,
                attributeGroupItems: action.payload,
            }
        case CHANGE_ATTRIBUTE_GROUP_FETCH_STATUS:
            return {
                ...state,
                fetchStatus: action.payload,
            }
        case CHANGE_ADD_ATTRIBUTE_GROUP_FIELDS:
            return {
                ...state,
                addAttributeGroupFields: {...state.addAttributeGroupFields, ...action.payload},
            }
        case CHANGE_ATTRIBUTE_GROUP_MODE:
            return {
                ...state,
                attributeGroupMode: action.payload,
            }
        case RESET_ADD_ATTRIBUTE_GROUP_FIELDS:
            return {
                ...state,
                addAttributeGroupFields: initialState.addAttributeGroupFields,
            }
        case SET_NEW_ID_ARRAY_FOR_DELETING:
            return {
                ...state,
                forDeleting: [...action.payload],
            }
        case RESET_ID_ARRAY_FOR_DELETING:
            return {
                ...state,
                forDeleting: initialState.forDeleting,
            }
        case SORT_ATTRIBUTE_GROUP:
            return {
                ...state,
                attributeGroupItems: [...action.payload],
            }
        case CHANGE_SORT_ORDER:
            return {
                ...state,
                sortOrder: action.payload,
            }
        default:
            return state
    }
}
