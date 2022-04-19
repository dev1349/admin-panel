// import {useSelector} from "react-redux";
// import { createTheme } from '@mui/material'
// import {data} from "../theme";
// import { useEffect } from 'react'
// import {allStyle} from "../reducers/styleSlice";
import { componentsArr } from './styleRegistrationService'
import { data } from '../theme'
import { createTheme } from '@mui/material'
// import { postAllStyleSuccess } from '../reducers/styleSlice'
// import { useDispatch, useSelector } from 'react-redux'
// import globalTheme from '../theme'

export const useTheme = () => {

    // todo убрать после тестирования
    // const dispatch = useDispatch()
    // const theme = data
    // useEffect(() => {
    //     dispatch(postAllStyleSuccess(theme.components))
    // })


    // const allStyles = useSelector(allStyle)
    // const themeData = {
    //     components: allStyles
    // }

    // const themeData = theme
    //
    // useEffect(() => {
    //     dispatch(postAllStyleSuccess(theme.components))
    // })
    console.log(componentsArr)
    console.log(data)
    return createTheme({components: componentsArr})
    // return createTheme({components: componentsArr})
    // return globalTheme
    // return globalTheme
}
