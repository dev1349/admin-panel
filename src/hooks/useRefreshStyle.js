import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { allStyle, putStyle, themeName } from '../reducers/styleSlice'

export const useRefreshStyle = () => {
    const styles = useSelector(allStyle)
    const name = useSelector(themeName)
    const data = convertStyle(name, styles)
    useEffect(() => {
        putStyle(data)
    })
}

const convertStyle = (themeName, data) => {
    return {
        themeName: themeName,
        componentSet: componentConvert(themeName, data)
    }
}

const componentConvert = (themeName, data) => {
    const keys = Object.keys(data)
    const resultArr = []
    keys.map(key => {
        const newEl = {
            themeName: themeName,
            styledComponentName: key,
            styleOverrideSet: styleOverrideConvert(themeName, key, data[key].styleOverrides),
            variantSet: variantConverter(themeName, key, data[key].variants)
        }
        resultArr.push(newEl)
    })
    return resultArr
}

const styleOverrideConvert = (themeName, compName, data) => {
    const keys = Object.keys(data)
    const resultArr = []
    keys.map(key => {
        const newEl = {
            themeName: themeName,
            styledComponentName: compName,
            styleOverrideName: key,
            styleSet: styleSoConvert(themeName, compName, key, data[key])
        }
        resultArr.push(newEl)
    })
    return resultArr
}

const variantConverter = (themeName, compName, data) => {
    const resultArr = []
    data.forEach((el, index) => {
        const newEl = {
            themeName: themeName,
            styledComponentName: compName,
            variantNumber: index,
            styleSet: styleVConvert(themeName, compName, index, el.style),
            propsSet: propsConvert(themeName, compName, index, el.props),
        }
        resultArr.push(newEl)
    })
    return resultArr
}

const styleSoConvert = (themeName, compName, styleOverrideName, data) => {
    const keys = Object.keys(data)
    const resultArr = []
    keys.map(key => {
        const newEl = {
            themeName: themeName,
            styledComponentName: compName,
            styleOverrideName: styleOverrideName,
            key: key,
            value: data[key]
        }
        resultArr.push(newEl)
    })
    return resultArr
}

//todo обработка стилей такого типа '& .MuiTypography-root'
const styleVConvert = (themeName, compName, variantNumber, data) => {
    const keys = Object.keys(data)
    const resultArr = []
    keys.map(key => {
        const newEl = {
            themeName: themeName,
            styledComponentName: compName,
            variantNumber: variantNumber,
            key: key,
            value: data[key]
        }
        resultArr.push(newEl)
    })
    return resultArr
}

const propsConvert = (themeName, compName, variantNumber, data) => {
    const keys = Object.keys(data)
    const resultArr = []
    keys.map(key => {
        const newEl = {
            themeName: themeName,
            styledComponentName: compName,
            variantNumber: variantNumber,
            key: key,
            value: data[key]
        }
        resultArr.push(newEl)
    })
    return resultArr
}
