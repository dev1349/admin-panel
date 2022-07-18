export const getFieldValueByPath = (pathToField, obj = null) => {
    const properties = Array.isArray(pathToField) ? pathToField : pathToField.split('.')
    return properties.reduce((prev, curr) => prev && prev[curr], obj)
}

export const descendingComparator = (a, b, orderBy) => {
    const aValue = getFieldValueByPath(orderBy, a) || ''
    const bValue = getFieldValueByPath(orderBy, b) || ''
    if (bValue < aValue) {
        return -1
    }
    if (bValue > aValue) {
        return 1
    }
    return 0
}

export const getComparator = (order, orderBy) => {
    return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy)
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
export const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index])
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0])
        if (order !== 0) {
            return order
        }
        return a[1] - b[1]
    })
    return stabilizedThis.map(el => el[0])
}

export const toSortTable = (rows, comparator) => {
    return stableSort(rows, comparator)
}
