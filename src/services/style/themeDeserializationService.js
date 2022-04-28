export const themeDeserialize = theme => {
    const compArr = []
    theme.components && theme.components.forEach(component => {
        const newComp = [
            component.styledComponentName,
            componentDeserialize(component.styleOverrides, component.variants)
        ]
        compArr.push(newComp)
    })
    return Object.fromEntries(compArr)
}

const componentDeserialize = (styleOverrides, variants) => {
    return {
        styleOverrides: styleOverridesDeserialize(styleOverrides),
        variants: variantsDeserialize(variants)
    }
}

const styleOverridesDeserialize = styleOverrides => {
    const styleOverrideArr = []
    styleOverrides && styleOverrides.forEach(styleOverride => {
        const newStyleOverride = [
            styleOverride.styleOverrideName,
            stylesSODeserialize(styleOverride.styles)
        ]
        styleOverrideArr.push(newStyleOverride)
    })
    return Object.fromEntries(styleOverrideArr)
}

const stylesSODeserialize = stylesSO => {
    const styleSOArr = []
    stylesSO && stylesSO.forEach(styleSO => {
        const newStyleSO = [
            styleSO.key,
            valueDeserialize(styleSO.value)
        ]
        styleSOArr.push(newStyleSO)
    })
    return Object.fromEntries(styleSOArr)
}

const variantsDeserialize = variants => {
    const variantArr = []
    variants && variants.forEach(variant => {
        const newVariant = {
            props: propsDeserialize(variant.props),
            style: stylesVDeserialize(variant.styles)
        }
        variantArr.push(newVariant)
    })
    return variantArr
}

const propsDeserialize = props => {
    const propsArr = []
    props && props.forEach(props => {
        const newProps = [
            props.key,
            props.value === 'true' // value может быть только boolean
        ]
        propsArr.push(newProps)
    })
    return Object.fromEntries(propsArr)
}

const stylesVDeserialize = stylesV => {
    const styleVArr = []
    stylesV && stylesV.forEach(styleV => {
        const newStyleV = [
            styleV.key,
            valueDeserialize(styleV.value)
        ]
        styleVArr.push(newStyleV)
    })
    return Object.fromEntries(styleVArr)
}

const valueDeserialize = stringVal => {
    const getKeyVal = str => {
        return str.split(':')
    }
    const res = []
    let valueArr
    if (stringVal.startsWith('{')) {
        valueArr = stringVal.substring(1, stringVal.length - 1).split(',')
        valueArr.forEach(val => {
            res.push(getKeyVal(val))
        })
        return Object.fromEntries(res)
    }
    return stringVal
}
