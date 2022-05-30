export const hasValues = values => values && Array.isArray(values) && values.length

export const getStringValues = (values, name) => values.reduce((acc, elem) => (acc === '' ? acc + elem[name] : acc + ', ' + elem[name]), '')

export const stringValues = (values, valueLength, name) => {
    if (!hasValues(values)) {
        return ''
    }
    const stringLine = getStringValues(values, name)
    if (stringLine.length > valueLength) {
        return stringLine.slice(0, valueLength) + '...'
    }

    return stringLine
}
