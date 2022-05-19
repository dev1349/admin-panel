const isObject = value => {
    const objectToString = Object.prototype.toString
    return objectToString.call(value).split(' ')[1].slice(0, -1) === 'Object'
}

const isEmptyObject = value => Object.keys(value).length === 0

const isArray = value => Array.isArray(value)

const isEmptyArray = value => value?.length === 0

const isNull = value => value === null

const valuesWithoutNull = (sendingData, ignoreFields, clearType) => {
    let resultDataObject = {}
    const keys = Object.keys(sendingData)
    if (isEmptyArray(keys)) return null

    keys.forEach(key => {
        if (ignoreFields.includes(key)) {
            resultDataObject[key] = sendingData[key]
            return
        }
        if (
            isArray(sendingData[key]) &&
            isEmptyArray(sendingData[key]) &&
            clearType === 'FOR_UPDATING'
        ) {
            resultDataObject[key] = []
            return
        }
        if (isArray(sendingData[key]) && isEmptyArray(sendingData[key])) return
        if (isArray(sendingData[key])) {
            let resultArray = sendingData[key].map(elem => {
                if (isObject(elem) && !isEmptyObject(elem)) {
                    const resultObject = valuesWithoutNull(elem, ignoreFields)
                    if (isEmptyObject(resultObject)) return
                    return resultObject
                }
                if (!isNull(elem) && !isObject(elem)) {
                    return elem
                }
            })

            resultArray = resultArray.filter(elem => elem)
            if (!isEmptyArray(resultArray)) resultDataObject[key] = resultArray
            return
        }
        if (isObject(sendingData[key]) && isEmptyObject(sendingData[key]))
            return
        if (isObject(sendingData[key])) {
            resultDataObject[key] = valuesWithoutNull(
                sendingData[key],
                ignoreFields
            )
            return
        }

        if (!isNull(sendingData[key])) {
            resultDataObject[key] = sendingData[key]
        }
    })

    return resultDataObject
}

export const deleteNullValuesFromObject = (
    sendingData,
    ignoreFields = [],
    clearType = 'FOR_CREATING'
) => {
    if (!isObject(sendingData)) return sendingData
    return valuesWithoutNull(sendingData, ignoreFields, clearType)
}

const valuesWithId = (value, fieldNames, ignoreFields) => {
    let newValue = {}
    const valueKeys = Object.keys(value)
    if (isEmptyArray(valueKeys)) return null

    valueKeys.forEach(valueKey => {
        if (ignoreFields.includes(valueKey)) return
        if (fieldNames.includes(valueKey)) {
            if (value[valueKey] === null) {
                newValue[valueKey] = null
                return
            }
            newValue[valueKey] = { id: value[valueKey] }
            return
        }
        if (isObject(value[valueKey])) {
            newValue[valueKey] = valuesWithId(
                value[valueKey],
                fieldNames,
                ignoreFields
            )
            return
        }
        if (isArray(value[valueKey])) {
            newValue[valueKey] = value[valueKey]
                .map(valueElem =>
                    valuesWithId(valueElem, fieldNames, ignoreFields)
                )
                .filter(elem => elem)
            return
        }
        newValue[valueKey] = value[valueKey]
    })
    return newValue
}

export const changeToObjectWithId = (
    value,
    fieldNames = [],
    ignoreFields = []
) => {
    if (!isObject(value) || isEmptyObject(value) || isEmptyArray(fieldNames)) {
        return value
    }
    return valuesWithId(value, fieldNames, ignoreFields)
}

const getValueForUpdating = (
    initialValue,
    changedValue,
    typeOfCommand,
    level = 0
) => {
    const newChangedValue = {}
    const changedValueKeys = Object.keys(changedValue)
    changedValueKeys.forEach(key => {
        if (key === 'id' && level === 0) {
            newChangedValue[key] = changedValue[key]
            return
        }
        if (isObject(changedValue[key]) && initialValue[key] === null) {
            newChangedValue[key] = changedValue[key]
            return
        }
        if (isObject(changedValue[key])) {
            const newObjectValue = getValueForUpdating(
                initialValue[key],
                changedValue[key],
                typeOfCommand,
                level + 1
            )

            if (isNull(newObjectValue) || isEmptyObject(newObjectValue)) return
            newObjectValue.id = changedValue[key].id
            newChangedValue[key] = newObjectValue
            return
        }
        if (
            isArray(changedValue[key]) &&
            !isEmptyArray(initialValue[key]) &&
            (initialValue[key] === null || isEmptyArray(initialValue[key]))
        ) {
            newChangedValue[key] = changedValue[key]
            return
        }
        if (isArray(changedValue[key])) {
            const valueForCreating = changedValue[key].filter(elem => !elem.id)

            const valueForDeleting = initialValue[key]
                .filter(
                    elem =>
                        !changedValue[key].find(
                            changedElem => changedElem.id === elem.id
                        )
                )
                .map(elem => ({ id: elem.id, command: typeOfCommand }))

            let valueForChanging = changedValue[key].filter(elem => elem.id)

            valueForChanging = valueForChanging
                .map(elem =>
                    getValueForUpdating(
                        initialValue[key].find(
                            initialElem => initialElem.id === elem.id
                        ),
                        elem,
                        typeOfCommand,
                        level + 1
                    )
                )
                .filter(elem => elem)

            const newChangedValueArray = [
                ...valueForCreating,
                ...valueForDeleting,
                ...valueForChanging,
            ]

            if (!isEmptyArray(newChangedValueArray)) {
                newChangedValue[key] = newChangedValueArray
            }

            return
        }
        if (
            changedValue[key] !== initialValue[key] &&
            changedValue[key] === null
        ) {
            newChangedValue.command = 'DELETE_FROM_PARENT'
            return
        }
        if (changedValue[key] !== initialValue[key]) {
            newChangedValue[key] = changedValue[key]
        }
    })

    if (Object.keys(newChangedValue).length === 1 && level === 0) {
        return null
    }

    if (!isEmptyObject(newChangedValue) && level !== 0) {
        newChangedValue.id = changedValue.id
        return newChangedValue
    }

    if (isEmptyObject(newChangedValue) && level !== 0) {
        return null
    }

    return newChangedValue
}

export const createValueForUpdating = (
    initialValue,
    changedValue,
    ignoreFields,
    typeOfCommand = null
) => {
    if (
        initialValue === null ||
        changedValue === null ||
        (isObject(initialValue) && isEmptyObject(initialValue)) ||
        (isObject(changedValue) && isEmptyObject(changedValue))
    )
        return null
    const changedValueWithoutNull = deleteNullValuesFromObject(
        changedValue,
        ignoreFields,
        'FOR_UPDATING'
    )
    return getValueForUpdating(
        initialValue,
        changedValueWithoutNull,
        typeOfCommand
    )
}
