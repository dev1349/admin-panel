export const hasValues = values => values && Array.isArray(values) && values.length

export const getStringValues = (values, name) => values.reduce((acc, elem) => (acc === '' ? acc + elem[name] : acc + ', ' + elem[name]), '')

export const stringValues = (values, name) => {
    if (!hasValues(values)) {
        return ''
    }
    return getStringValues(values, name)
}

export const totalStringValues = (item, propertiesForString, valueLength) => {
    let totalString = propertiesForString.reduce((accString, property) => {
        let result = accString !== '' ? ', ' : ''
        result = result + stringValues(item[property.itemsProperty], property.propertyName)
        return accString + result
    }, '')

    if (valueLength === 0) {
        return totalString
    }
    if (totalString.length > valueLength) {
        return totalString.slice(0, valueLength) + '...'
    }
    return totalString
}
