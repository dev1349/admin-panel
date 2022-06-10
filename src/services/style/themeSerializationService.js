export const themeSerialize = (themeName, constants, components) => {
    return {
        name: themeName,
        constants: constantSerialize(themeName, constants),
        components: componentSerialize(components)
    }
}

const componentSerialize = data => {
    const keys = Object.keys(data)
    const resultArr = []
    keys.map(key => {
        const newEl = {
            name: key,
            styleOverrides: styleOverrideSerialize(data[key].styleOverrides),
            variants: variantSerialize(data[key].variants)
        }
        resultArr.push(newEl)
    })
    return resultArr
}

const styleOverrideSerialize = data => {
    const keys = Object.keys(data)
    const resultArr = []
    keys.map(key => {
        const newEl = {
            name: key,
            styles: styleSoSerialize(data[key])
        }
        resultArr.push(newEl)
    })
    return resultArr
}

const variantSerialize = data => {
    const resultArr = []
    data && data.forEach(el => {
        const newEl = {
            styles: styleVSerialize(el.style),
            props: propsSerialize(el.props),
        }
        resultArr.push(newEl)
    })
    return resultArr
}

const styleSoSerialize = data => {
    const keys = Object.keys(data)
    const resultArr = []
    keys.map(key => {
        const newEl = {
            key: key,
            value: data[key]
        }
        resultArr.push(newEl)
    })
    return resultArr
}

//todo обработка стилей такого типа '& .MuiTypography-root'
const styleVSerialize = data => {
    const keys = Object.keys(data)
    const resultArr = []
    keys.map(key => {
        const newEl = {
            key: key,
            value: data[key]
        }
        resultArr.push(newEl)
    })
    return resultArr
}

const propsSerialize = data => {
    const keys = Object.keys(data)
    const resultArr = []
    keys.map(key => {
        const newEl = {
            key: key,
            value: data[key]
        }
        resultArr.push(newEl)
    })
    return resultArr
}

const constantSerialize = (themeName, constants) => {
    const res = []
    const constantKeys = Object.keys(constants)
    constantKeys.forEach(x => {
        const keys = Object.keys(constants[x])
        keys.forEach(y => {
            const key = '$' + x.toString() + '.' + y
            const value = constants[x][y]
            res.push({ themeName, key, value })
        })
    })
    return res
}
