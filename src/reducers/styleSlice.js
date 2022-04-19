import {createSlice} from '@reduxjs/toolkit'
import {
    deleteStyleFetch,
    getAllStyleFetch,
    getStyleFetch,
    postStyleFetch,
    putStyleFetch,
} from '../api/styleApi'

// todo добавить варианты запуска с мок стилями и с серверными стилями
// todo добавить модуль для регистрации локальных стилей на сервере

const styleSlice = createSlice({
    name: 'style',
    initialState: {
        styleFrom: 'server', // local/server
        themeName: 'default', // задать уникальное имя своих изменений
        allStyle: {}
    },
    reducers: {
        postStyleSuccess(state, action) {
            state.allStyle.push(action.payload)
        },
        postAllStyleSuccess(state, action) {
            state.allStyle = action.payload
        },
        postStyleLocal(state, action) {
            state.allStyle[action.payload.name] = action.payload.style
        },
        getStyleSuccess(state, action) {
            state.currentStyle = action.payload
        },
        getAllStyleSuccess(state, action) {
            state.allStyle = action.payload
        },
        putStyleSuccess(state, action) {
            state.allStyle = action.payload
        },
        deleteStyleSuccess(state, action) {
            state.allStyle.filter(item => item.id !== action.payload.id)
        },
    },
})

export const {
    postStyleSuccess,
    getStyleSuccess,
    getAllStyleSuccess,
    putStyleSuccess,
    deleteStyleSuccess,
    postStyleLocalSuccess,
    postAllStyleSuccess,
    postStyleLocal,
} = styleSlice.actions

export default styleSlice.reducer

export const allStyle = state => state.style.allStyle
export const themeName = state => state.style.themeName
export const styleFrom = state => state.style.styleFrom

export const postStyle = style => dispatch => {
    postStyleFetch(style)
        .then(response => response.json())
        .then(data => dispatch(postStyleSuccess(data)))
}

// export const postStyleLocal = style => dispatch => {
//     dispatch(postStyleLocalSuccess(style))
// }

export const getStyle = id => dispatch => {
    getStyleFetch(id).then(data => dispatch(getStyleSuccess(data)))
}

export const getAllStyle = () => dispatch => {
    getAllStyleFetch().then(data =>
        dispatch(getAllStyleSuccess(Object.values(data)))
    )
}

export const putStyle = style => dispatch => {
    putStyleFetch(style)
        .then(response => response.json())
        .then(data => dispatch(putStyleSuccess(data)))
}

export const deleteStyle = style => dispatch => {
    deleteStyleFetch(style).then(data => {
        dispatch(deleteStyleSuccess(data))
    })
}
