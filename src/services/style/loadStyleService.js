import { styleConstants, styledComponents } from './registrationStyleService'
import { getThemeFetch } from '../../api/styleApi'
import { themeDeserialize } from './themeDeserializationService'

export const loadStyles = (loadType, themeName) => {
    if ('server' === loadType) {
        return serverLoading(themeName)
    } else {
        return localLoading()
    }
}

const localLoading = () => {
    return new Promise(resolve =>
        resolve({
            constants: loadConstants(styleConstants),
            styles: loadStyledComponents(styledComponents, loadConstants(styleConstants)),
        })
    )
}

const serverLoading = name => {
    return getThemeFetch(name)
        .then(data => themeDeserialize(data))
        .then(res => {
            return {
                constants: res.constants,
                styles: loadStyledComponents(res.components, res.constants),
            }
        })
}

export const loadConstants = constants => {
    const res = []
    const constantKeys = Object.keys(constants)
    constantKeys.forEach(x => {
        const keys = Object.keys(constants[x])
        keys.forEach(y => {
            const key = '$' + x.toString() + '.' + y
            const value = constants[x][y]
            res.push([key, value])
        })
    })
    return Object.fromEntries(res)
}

const loadStyledComponents = (components, constants) => {
    const resComponents = components

    const changeSOValue = (val, component, ...rest) => {
        const deep = rest.length
        if (deep === 2) {
            resComponents[component]['styleOverrides'][rest[0]][rest[1]] = constants[val]
        } else if (deep === 3) {
            resComponents[component]['styleOverrides'][rest[0]][rest[1]][rest[2]] = constants[val]
        } else if (deep === 4) {
            resComponents[component]['styleOverrides'][rest[0]][rest[1]][rest[2]][rest[3]] = constants[val]
        }
    }

    const changeVariantValue = (val, component, i, ...rest) => {
        const deep = rest.length
        if (deep === 1) {
            resComponents[component]['variants'][i]['style'][rest[0]] = constants[val]
        } else if (deep === 2) {
            resComponents[component]['variants'][i]['style'][rest[0]][rest[1]] = constants[val]
        } else if (deep === 3) {
            resComponents[component]['variants'][i]['style'][rest[0]][rest[1]][rest[2]] = constants[val]
        }
    }

    const styleOverridesConstantInitiation = component => {
        const styleOverrides = components[component]['styleOverrides']
        if (styleOverrides === undefined) {
            return
        }
        const styleOverrideKeys = Object.keys(styleOverrides)
        styleOverrideKeys.forEach(so => {
            const keys = Object.keys(styleOverrides[so])
            keys.forEach(k1 => {
                if (k1.startsWith('&')) {
                    const keys2 = Object.keys(styleOverrides[so][k1])
                    keys2.forEach(k2 => {
                        const value = styleOverrides[so][k1][k2]
                        if (isConstant(value)) {
                            changeSOValue(value, component, so, k1, k2)
                        }
                    })
                } else if (k1.startsWith('@')) {
                    const keys2 = Object.keys(styleOverrides[so][k1])
                    keys2.forEach(k2 => {
                        if (k2.startsWith('&')) {
                            const keys3 = Object.keys(styleOverrides[so][k1][k2])
                            keys3.forEach(k3 => {
                                const value = styleOverrides[so][k1][k2][k3]
                                if (isConstant(value)) {
                                    changeSOValue(value, component, so, k1, k2, k3)
                                }
                            })
                            const value = styleOverrides[so][k1][k2]
                            if (isConstant(value)) {
                                changeSOValue(value, component, so, k1, k2)
                            }
                        } else {
                            const value = styleOverrides[so][k1][k2]
                            if (isConstant(value)) {
                                changeSOValue(value, component, so, k1, k2)
                            }
                        }
                    })
                } else {
                    const value = styleOverrides[so][k1]
                    if (isConstant(value)) {
                        changeSOValue(value, component, so, k1)
                    }
                }
            })
        })
    }

    const variantsConstantInitiation = component => {
        const variants = components[component].variants
        if (variants === undefined) {
            return
        }
        variants.forEach((variant, i) => {
            const styleKeys = Object.keys(variant.style)
            styleKeys.forEach(k1 => {
                if (k1.startsWith('&')) {
                    const keys2 = Object.keys(variants[i]['style'][k1])
                    keys2.forEach(k2 => {
                        const value = variants[i]['style'][k1][k2]
                        if (isConstant(value)) {
                            changeVariantValue(value, component, i, k1, k2)
                        }
                    })
                } else if (k1.startsWith('@')) {
                    const keys2 = Object.keys(variants[i]['style'][k1])
                    keys2.forEach(k2 => {
                        if (k2.startsWith('&')) {
                            const keys3 = Object.keys(variants[i]['style'][k1][k2])
                            keys3.forEach(k3 => {
                                const value = variants[i]['style'][k1][k2][k3]
                                if (isConstant(value)) {
                                    changeVariantValue(value, component, i, k1, k2, k3)
                                }
                            })
                            const value = variants[i]['style'][k1][k2]
                            if (isConstant(value)) {
                                changeVariantValue(value, component, i, k1, k2)
                            }
                        } else {
                            const value = variants[i]['style'][k1][k2]
                            if (isConstant(value)) {
                                changeVariantValue(value, component, i, k1, k2)
                            }
                        }
                    })
                } else {
                    const value = variants[i]['style'][k1]
                    if (isConstant(value)) {
                        changeVariantValue(value, component, i, k1)
                    }
                }
            })
        })
    }

    const componentKeys = Object.keys(components)
    componentKeys.forEach(component => {
        styleOverridesConstantInitiation(component)
        variantsConstantInitiation(component)
    })

    return resComponents
}

const isConstant = stringVal => {
    if (typeof stringVal !== 'string') {
        return false
    }
    return stringVal.startsWith('$')
}
