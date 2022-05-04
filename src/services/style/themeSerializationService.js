export const themeSerialize = (themeName, data) => {
    return {
        themeName: themeName,
        components: componentSerialize(themeName, data)
    }
}

const componentSerialize = (themeName, data) => {
    const keys = Object.keys(data)
    const resultArr = []
    keys.map(key => {
        const newEl = {
            themeName: themeName,
            styledComponentName: key,
            styleOverrides: styleOverrideSerialize(themeName, key, data[key].styleOverrides),
            variants: variantSerialize(themeName, key, data[key].variants)
        }
        resultArr.push(newEl)
    })
    return resultArr
}

const styleOverrideSerialize = (themeName, compName, data) => {
    const keys = Object.keys(data)
    const resultArr = []
    keys.map(key => {
        const newEl = {
            themeName: themeName,
            styledComponentName: compName,
            styleOverrideName: key,
            styles: styleSoSerialize(themeName, compName, key, data[key])
        }
        resultArr.push(newEl)
    })
    return resultArr
}

const variantSerialize = (themeName, compName, data) => {
    const resultArr = []
    data && data.forEach((el, index) => {
        const newEl = {
            themeName: themeName,
            styledComponentName: compName,
            variantNumber: index,
            styles: styleVSerialize(themeName, compName, index, el.style),
            props: propsSerialize(themeName, compName, index, el.props),
        }
        resultArr.push(newEl)
    })
    return resultArr
}

const styleSoSerialize = (themeName, compName, styleOverrideName, data) => {
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
const styleVSerialize = (themeName, compName, variantNumber, data) => {
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

const propsSerialize = (themeName, compName, variantNumber, data) => {
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
