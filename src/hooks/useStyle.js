import { styled } from '@mui/material'
import { postStyleLocal } from '../reducers/styleSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
// import {useReducer} from "react";


export const useStyle = (name, tag, style, shouldForwardProp1, shouldForwardProp2) => {
    // const [state, dispatch] = useReducer(postStyleLocal, {style: {}});
    const dispatch = useDispatch()
    // if ('development' === process.env.NODE_ENV) {
    //     // postStyleLocal(style)
    //     dispatch(postStyleSuccess(style))
    // }

    useEffect(() => {
        if ('development' === process.env.NODE_ENV) {
            // postStyleLocal(style)
            dispatch(postStyleLocal({ name: name, style: style }))
        }
        // dispatch(postAllStyleSuccess(theme.components))
    })
    if (shouldForwardProp1 === undefined) {
        return styled(tag, {
            name: name,
            slot: 'Root', // todo проверить необходимость параметра для slot
            overridesResolver: (props, styles) => [styles.root],
        })``
    } else {
        if (shouldForwardProp2 === undefined) {
            return styled(tag, {
                name: name,
                slot: 'Root',
                overridesResolver: (props, styles) => [styles.root],
                shouldForwardProp: prop => prop !== shouldForwardProp1,
            })``
        } else {
            return styled(tag, {
                name: name,
                slot: 'Root',
                overridesResolver: (props, styles) => [styles.root],
                shouldForwardProp: prop => prop !== shouldForwardProp1 && prop !== shouldForwardProp2
            })``
        }
    }
}


// export const initialStyle = (name, tag, slot, style) => {
//     if ('development' === process.env.NODE_ENV) {
//         postStyleToServer(name, style)
//         // dispatch(postStyleLocal(style))
//     }
//     return styled(tag, {
//         name: name,
//         slot: slot,
//         overridesResolver: (props, styles) => [styles.root],
//     })``
// }

// const postStyleToServer = (name, style) => {
//     console.log(name + ' ' + style)
// }
