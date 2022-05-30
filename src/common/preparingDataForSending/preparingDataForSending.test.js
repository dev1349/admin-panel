import { deleteNullValuesFromObject, changeToObjectWithId, createValueForUpdating, leaveIdOnlyInObject } from './preparingDataForSending'

// eslint-disable-next-line no-undef
describe('testing function "deleteNullValuesFromObject"', () => {
    // eslint-disable-next-line no-undef
    it('deleting null values', () => {
        const valuesWithNull = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
            characteristicGroup: null,
            characteristicValues: [
                {
                    id: 0,
                    value: 'someName',
                    characteristic: 0,
                },
            ],
        }
        const valuesWithoutNull = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
            characteristicValues: [
                {
                    id: 0,
                    value: 'someName',
                    characteristic: 0,
                },
            ],
        }
        // eslint-disable-next-line no-undef
        expect(deleteNullValuesFromObject(valuesWithNull)).toEqual(valuesWithoutNull)
    })

    // eslint-disable-next-line no-undef
    it('deleting null values and empty array', () => {
        const valuesWithNull = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
            characteristicGroup: null,
            characteristicValues: [],
        }
        const valuesWithoutNull = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
        }
        // eslint-disable-next-line no-undef
        expect(deleteNullValuesFromObject(valuesWithNull)).toEqual(valuesWithoutNull)
    })

    // eslint-disable-next-line no-undef
    it('deleting null values without empty array', () => {
        const valuesWithNull = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
            characteristicGroup: null,
            characteristicValues: [],
        }
        const valuesWithoutNull = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
            characteristicValues: [],
        }
        // eslint-disable-next-line no-undef
        expect(deleteNullValuesFromObject(valuesWithNull, [], 'FOR_UPDATING')).toEqual(valuesWithoutNull)
    })

    // eslint-disable-next-line no-undef
    it('deleting null values without ignore fields', () => {
        const valuesWithNull = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
            characteristicGroup: null,
        }

        const valuesWithoutNull = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
            characteristicGroup: null,
        }
        // eslint-disable-next-line no-undef
        expect(deleteNullValuesFromObject(valuesWithNull, ['characteristicGroup'])).toEqual(valuesWithoutNull)
    })

    // eslint-disable-next-line no-undef
    it('deleting null values with empty object', () => {
        const valuesWithNull = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
            characteristicGroup: {},
        }

        const valuesWithoutNull = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
        }
        // eslint-disable-next-line no-undef
        expect(deleteNullValuesFromObject(valuesWithNull)).toEqual(valuesWithoutNull)
    })

    // eslint-disable-next-line no-undef
    it('deleting null values with array of number', () => {
        const valuesWithNull = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
            characteristicGroup: null,
            characteristicValues: [3, 4, 5],
        }

        const valuesWithoutNull = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
            characteristicValues: [3, 4, 5],
        }
        // eslint-disable-next-line no-undef
        expect(deleteNullValuesFromObject(valuesWithNull)).toEqual(valuesWithoutNull)
    })

    // eslint-disable-next-line no-undef
    it('deleting null values with array of object', () => {
        const valuesWithNull = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
            characteristicGroup: null,
            characteristicValues: [
                { id: 1, name: 'one' },
                { id: 2, name: 'two' },
                { id: 3, name: 'tree' },
            ],
        }

        const valuesWithoutNull = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
            characteristicValues: [
                { id: 1, name: 'one' },
                { id: 2, name: 'two' },
                { id: 3, name: 'tree' },
            ],
        }
        // eslint-disable-next-line no-undef
        expect(deleteNullValuesFromObject(valuesWithNull)).toEqual(valuesWithoutNull)
    })

    // eslint-disable-next-line no-undef
    it('deleting null values with array of empty object', () => {
        const valuesWithNull = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
            characteristicGroup: null,
            characteristicValues: [{}, {}, {}],
        }

        const valuesWithoutNull = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
        }
        // eslint-disable-next-line no-undef
        expect(deleteNullValuesFromObject(valuesWithNull)).toEqual(valuesWithoutNull)
    })

    // eslint-disable-next-line no-undef
    it('deleting null values with nested object', () => {
        const valuesWithNull = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
            characteristicGroup: { id: 1 },
        }

        const valuesWithoutNull = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
            characteristicGroup: { id: 1 },
        }
        // eslint-disable-next-line no-undef
        expect(deleteNullValuesFromObject(valuesWithNull)).toEqual(valuesWithoutNull)
    })
})

// eslint-disable-next-line no-undef
describe('testing function "changeToObjectWithId"', () => {
    // eslint-disable-next-line no-undef
    it('transform value to value with id object without to put fieldName', () => {
        const initialValue = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
            characteristicGroup: 1,
        }

        const value = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
            characteristicGroup: 1,
        }
        // eslint-disable-next-line no-undef
        expect(changeToObjectWithId(initialValue)).toEqual(value)
    })

    // eslint-disable-next-line no-undef
    it('transform value to value with id object', () => {
        const initialValue = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
            characteristicGroup: 1,
        }

        const value = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
            characteristicGroup: { id: 1 },
        }
        // eslint-disable-next-line no-undef
        expect(changeToObjectWithId(initialValue, ['characteristicGroup'])).toEqual(value)
    })

    // eslint-disable-next-line no-undef
    it('transform null value to value with id object ', () => {
        const initialValue = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
            characteristicGroup: null,
        }

        const value = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
            characteristicGroup: null,
        }
        // eslint-disable-next-line no-undef
        expect(changeToObjectWithId(initialValue, ['characteristicGroup'])).toEqual(value)
    })

    // eslint-disable-next-line no-undef
    it('transform null value to value with id object and delete nested ignore fields', () => {
        const initialValue = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
            characteristicGroup: null,
            command: null,
            characteristicValues: [
                {
                    id: 1,
                    name: 'one',
                    command: null,
                },
                {
                    id: 2,
                    name: 'two',
                    command: null,
                },
            ],
        }

        const value = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
            characteristicGroup: null,
            characteristicValues: [
                {
                    id: 1,
                    name: 'one',
                },
                {
                    id: 2,
                    name: 'two',
                },
            ],
        }
        // eslint-disable-next-line no-undef
        expect(changeToObjectWithId(initialValue, ['characteristicGroup'], ['command'])).toEqual(value)
    })

    // eslint-disable-next-line no-undef
    it('transform null value to value with id object and delete nested ignore fields 2', () => {
        const initialValue = {
            id: 114,
            name: '333',
            categoryType: 'WITH_CATEGORIES',
            parentCategory: null,
            subCategories: [
                {
                    id: 122,
                    name: 'asdf',
                    categoryType: 'WITH_GOODS',
                    parentCategory: 114,
                    subCategories: [],
                    characteristicSets: [],
                    command: null,
                },
            ],
            characteristicSets: [],
            command: null,
        }

        const value = {
            id: 114,
            name: '333',
            categoryType: 'WITH_CATEGORIES',
            parentCategory: null,
            subCategories: [
                {
                    id: 122,
                    name: 'asdf',
                    categoryType: 'WITH_GOODS',
                    parentCategory: { id: 114 },
                    subCategories: [],
                    characteristicSets: [],
                },
            ],
            characteristicSets: [],
        }
        // eslint-disable-next-line no-undef
        expect(changeToObjectWithId(initialValue, ['parentCategory'], ['command'])).toEqual(value)
    })
})

// eslint-disable-next-line no-undef
describe('testing function "createValueForUpdating"', () => {
    // eslint-disable-next-line no-undef
    it('create value for updating with null initial and changed values', () => {
        const initialValue = null
        const changedValue = null
        // eslint-disable-next-line no-undef
        expect(createValueForUpdating(initialValue, changedValue)).toBe(null)
    })

    // eslint-disable-next-line no-undef
    it('create value for updating with null initial values', () => {
        const initialValue = null
        const changedValue = { id: 4, name: 'one' }
        // eslint-disable-next-line no-undef
        expect(createValueForUpdating(initialValue, changedValue)).toBe(null)
    })

    // eslint-disable-next-line no-undef
    it('create value for updating with null changed values', () => {
        const initialValue = { id: 4, name: 'one' }
        const changedValue = null
        // eslint-disable-next-line no-undef
        expect(createValueForUpdating(initialValue, changedValue)).toBe(null)
    })

    // eslint-disable-next-line no-undef
    it('create value for updating with empty initial and changed values', () => {
        const initialValue = {}
        const changedValue = {}
        // eslint-disable-next-line no-undef
        expect(createValueForUpdating(initialValue, changedValue)).toBe(null)
    })

    // eslint-disable-next-line no-undef
    it('create value for updating with null initial and empty changed values', () => {
        const initialValue = null
        const changedValue = {}
        // eslint-disable-next-line no-undef
        expect(createValueForUpdating(initialValue, changedValue)).toBe(null)
    })

    // eslint-disable-next-line no-undef
    it('create value for updating with not empty initial and empty changed values', () => {
        const initialValue = { id: 1, name: 'one' }
        const changedValue = {}
        // eslint-disable-next-line no-undef
        expect(createValueForUpdating(initialValue, changedValue)).toBe(null)
    })

    // eslint-disable-next-line no-undef
    it('create value for updating with identical initial and changed values', () => {
        const initialValue = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
            characteristicGroup: null,
            characteristicValues: [
                {
                    id: 1,
                    name: 'one',
                },
                {
                    id: 2,
                    name: 'two',
                },
            ],
        }
        const changedValue = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
            characteristicGroup: null,
            characteristicValues: [
                {
                    id: 1,
                    name: 'one',
                },
                {
                    id: 2,
                    name: 'two',
                },
            ],
        }
        // eslint-disable-next-line no-undef
        expect(createValueForUpdating(initialValue, changedValue, ['characteristicGroup'])).toEqual(null)
    })

    // eslint-disable-next-line no-undef
    it('create value for updating with different characteristicGroup, initial characteristicGroup is null, changed characteristicGroup is non null', () => {
        const initialValue = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
            characteristicGroup: null,
            characteristicValues: [
                {
                    id: 1,
                    name: 'one',
                },
                {
                    id: 2,
                    name: 'two',
                },
            ],
        }
        const changedValue = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
            characteristicGroup: { id: 1 },
            characteristicValues: [
                {
                    id: 1,
                    name: 'one',
                },
                {
                    id: 2,
                    name: 'two',
                },
            ],
        }
        const result = {
            id: 0,
            characteristicGroup: { id: 1 },
        }

        // eslint-disable-next-line no-undef
        expect(createValueForUpdating(initialValue, changedValue, ['characteristicGroup'])).toEqual(result)
    })

    // eslint-disable-next-line no-undef
    it('create value for updating with different characteristicGroup, initial characteristicGroup is not null, changed characteristicGroup is null', () => {
        const initialValue = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
            characteristicGroup: { id: 1 },
            characteristicValues: [
                {
                    id: 1,
                    name: 'one',
                },
                {
                    id: 2,
                    name: 'two',
                },
            ],
        }
        const changedValue = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
            characteristicGroup: null,
            characteristicValues: [
                {
                    id: 1,
                    name: 'one',
                },
                {
                    id: 2,
                    name: 'two',
                },
            ],
        }
        const result = {
            id: 0,
            command: 'DELETE_FROM_PARENT',
        }

        // eslint-disable-next-line no-undef
        expect(createValueForUpdating(initialValue, changedValue, ['characteristicGroup'])).toEqual(result)
    })

    // eslint-disable-next-line no-undef
    it('create value for updating with different not null characteristicGroup', () => {
        const initialValue = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
            characteristicGroup: { id: 1 },
            characteristicValues: [
                {
                    id: 1,
                    name: 'one',
                },
                {
                    id: 2,
                    name: 'two',
                },
            ],
        }
        const changedValue = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
            characteristicGroup: { id: 2 },
            characteristicValues: [
                {
                    id: 1,
                    name: 'one',
                },
                {
                    id: 2,
                    name: 'two',
                },
            ],
        }
        const result = {
            id: 0,
            characteristicGroup: { id: 2 },
        }

        // eslint-disable-next-line no-undef
        expect(createValueForUpdating(initialValue, changedValue, ['characteristicGroup'])).toEqual(result)
    })

    // eslint-disable-next-line no-undef
    it('create value for updating with different simple fields', () => {
        const initialValue = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: false,
            orderNumber: 2,
            characteristicGroup: { id: 1 },
            characteristicValues: [
                {
                    id: 1,
                    name: 'one',
                },
                {
                    id: 2,
                    name: 'two',
                },
            ],
        }
        const changedValue = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
            characteristicGroup: { id: 1 },
            characteristicValues: [
                {
                    id: 1,
                    name: 'one',
                },
                {
                    id: 2,
                    name: 'two',
                },
            ],
        }
        const result = {
            id: 0,
            isAvailableInFilter: true,
            orderNumber: 0,
        }

        // eslint-disable-next-line no-undef
        expect(createValueForUpdating(initialValue, changedValue, ['characteristicGroup'])).toEqual(result)
    })

    // eslint-disable-next-line no-undef
    it('create value for updating with empty characteristicValues', () => {
        const initialValue = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: false,
            orderNumber: 2,
            characteristicGroup: { id: 1 },
            characteristicValues: [
                {
                    id: 1,
                    name: 'one',
                },
                {
                    id: 2,
                    name: 'two',
                },
            ],
        }
        const changedValue = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: false,
            orderNumber: 2,
            characteristicGroup: { id: 1 },
            characteristicValues: [],
        }
        const result = {
            id: 0,
            characteristicValues: [
                {
                    id: 1,
                    command: 'HARD_DELETE',
                },
                {
                    id: 2,
                    command: 'HARD_DELETE',
                },
            ],
        }

        // eslint-disable-next-line no-undef
        expect(createValueForUpdating(initialValue, changedValue, ['characteristicGroup'], 'HARD_DELETE')).toEqual(result)
    })

    // eslint-disable-next-line no-undef
    it('create value for updating with different characteristicValues', () => {
        const initialValue = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: false,
            orderNumber: 2,
            characteristicGroup: { id: 1 },
            characteristicValues: [
                {
                    id: 1,
                    name: 'one',
                },
                {
                    id: 2,
                    name: 'two',
                },
            ],
        }
        const changedValue = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: false,
            orderNumber: 2,
            characteristicGroup: { id: 1 },
            characteristicValues: [
                {
                    id: 1,
                    name: 'one',
                },
            ],
        }
        const result = {
            id: 0,
            characteristicValues: [
                {
                    id: 2,
                    command: 'HARD_DELETE',
                },
            ],
        }

        // eslint-disable-next-line no-undef
        expect(createValueForUpdating(initialValue, changedValue, ['characteristicGroup'], 'HARD_DELETE')).toEqual(result)
    })

    // eslint-disable-next-line no-undef
    it('create value for updating with modified characteristicValues', () => {
        const initialValue = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: false,
            orderNumber: 2,
            characteristicGroup: { id: 1 },
            characteristicValues: [
                {
                    id: 1,
                    name: 'one',
                },
                {
                    id: 2,
                    name: 'two',
                },
            ],
        }
        const changedValue = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: false,
            orderNumber: 2,
            characteristicGroup: { id: 1 },
            characteristicValues: [
                {
                    id: 1,
                    name: 'one',
                },
                {
                    id: 2,
                    name: 'tree',
                },
            ],
        }
        const result = {
            id: 0,
            characteristicValues: [
                {
                    id: 2,
                    name: 'tree',
                },
            ],
        }

        // eslint-disable-next-line no-undef
        expect(createValueForUpdating(initialValue, changedValue, ['characteristicGroup'], 'HARD_DELETE')).toEqual(result)
    })

    // eslint-disable-next-line no-undef
    it('create value for updating with new characteristicValues', () => {
        const initialValue = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: false,
            orderNumber: 2,
            characteristicGroup: { id: 1 },
            characteristicValues: [
                {
                    id: 1,
                    name: 'one',
                },
                {
                    id: 2,
                    name: 'two',
                },
            ],
        }
        const changedValue = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: false,
            orderNumber: 2,
            characteristicGroup: { id: 1 },
            characteristicValues: [
                {
                    id: 1,
                    name: 'one',
                },
                {
                    id: 2,
                    name: 'two',
                },
                {
                    name: 'four',
                },
            ],
        }
        const result = {
            id: 0,
            characteristicValues: [
                {
                    name: 'four',
                },
            ],
        }

        // eslint-disable-next-line no-undef
        expect(createValueForUpdating(initialValue, changedValue, ['characteristicGroup'], 'HARD_DELETE')).toEqual(result)
    })

    // eslint-disable-next-line no-undef
    it('create value for updating with new, modified and for deleting characteristicValues', () => {
        const initialValue = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: false,
            orderNumber: 2,
            characteristicGroup: { id: 1 },
            characteristicValues: [
                {
                    id: 1,
                    name: 'one',
                },
                {
                    id: 2,
                    name: 'two',
                },
                {
                    id: 3,
                    name: 'tree',
                },
            ],
        }
        const changedValue = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: false,
            orderNumber: 2,
            characteristicGroup: { id: 1 },
            characteristicValues: [
                {
                    id: 1,
                    name: 'one',
                },
                {
                    id: 2,
                    name: 'twotwo',
                },
                {
                    name: 'four',
                },
            ],
        }
        const result = {
            id: 0,
            characteristicValues: [
                {
                    name: 'four',
                },
                {
                    id: 3,
                    command: 'HARD_DELETE',
                },
                {
                    id: 2,
                    name: 'twotwo',
                },
            ],
        }

        // eslint-disable-next-line no-undef
        expect(createValueForUpdating(initialValue, changedValue, ['characteristicGroup'], 'HARD_DELETE')).toEqual(result)
    })

    // eslint-disable-next-line no-undef
    it('create value for updating CATEGORIES', () => {
        const initialValue = {
            id: 114,
            name: '333',
            categoryType: 'WITH_CATEGORIES',
            parentCategory: { id: 34 },
            subCategories: [
                {
                    id: 122,
                    name: 'asdf',
                    categoryType: 'WITH_GOODS',
                    parentCategory: {
                        id: 114,
                    },
                },
            ],
            characteristicSets: [],
        }
        const changedValue = {
            id: 114,
            name: '333',
            categoryType: 'WITH_CATEGORIES',
            parentCategory: null,
            subCategories: [
                {
                    id: 122,
                    name: 'asdf',
                    categoryType: 'WITH_GOODS',
                    parentCategory: {
                        id: 114,
                    },
                },
            ],
            characteristicSets: [],
        }
        const result = {
            id: 114,
            command: 'DELETE_FROM_PARENT',
        }

        // eslint-disable-next-line no-undef
        expect(createValueForUpdating(initialValue, changedValue, ['parentCategory'])).toEqual(result)
    })

    // eslint-disable-next-line no-undef
    it('create value for updating characteristic group with id only object', () => {
        const initialValue = {
            id: 25,
            name: 'Проверка',
            isAdminOnly: true,
            orderNumber: 11,
            characteristics: [
                {
                    id: 22,
                },
            ],
        }
        const changedValue = {
            id: 25,
            name: 'Проверка',
            isAdminOnly: true,
            orderNumber: 11,
            characteristics: [
                {
                    id: 22,
                },
            ],
        }
        const result = null

        // eslint-disable-next-line no-undef
        expect(createValueForUpdating(initialValue, changedValue)).toEqual(result)
    })

    // eslint-disable-next-line no-undef
    it('create value for updating characteristic group with id only objects (add new characteristic)', () => {
        const initialValue = {
            id: 25,
            name: 'Проверка',
            isAdminOnly: true,
            orderNumber: 11,
            characteristics: [
                {
                    id: 22,
                },
            ],
        }
        const changedValue = {
            id: 25,
            name: 'Проверка',
            isAdminOnly: true,
            orderNumber: 11,
            characteristics: [
                {
                    id: 22,
                },
                {
                    id: 23,
                },
            ],
        }
        const result = {
            id: 25,
            characteristics: [
                {
                    id: 23,
                },
            ],
        }

        // eslint-disable-next-line no-undef
        expect(createValueForUpdating(initialValue, changedValue, [], 'DELETE_FROM_PARENT')).toEqual(result)
    })

    // eslint-disable-next-line no-undef
    it('create value for updating characteristic group with id only objects (delete characteristic)', () => {
        const initialValue = {
            id: 25,
            name: 'Проверка',
            isAdminOnly: true,
            orderNumber: 11,
            characteristics: [
                {
                    id: 22,
                },
                {
                    id: 23,
                },
            ],
        }
        const changedValue = {
            id: 25,
            name: 'Проверка',
            isAdminOnly: true,
            orderNumber: 11,
            characteristics: [
                {
                    id: 22,
                },
            ],
        }
        const result = {
            id: 25,
            characteristics: [
                {
                    id: 23,
                    command: 'DELETE_FROM_PARENT',
                },
            ],
        }

        // eslint-disable-next-line no-undef
        expect(createValueForUpdating(initialValue, changedValue, [], 'DELETE_FROM_PARENT')).toEqual(result)
    })

    // eslint-disable-next-line no-undef
    it('create value for updating characteristic group with id only objects (delete all characteristic)', () => {
        const initialValue = {
            id: 25,
            name: 'Проверка',
            isAdminOnly: true,
            orderNumber: 11,
            characteristics: [
                {
                    id: 22,
                },
                {
                    id: 23,
                },
            ],
        }
        const changedValue = {
            id: 25,
            name: 'Проверка',
            isAdminOnly: true,
            orderNumber: 11,
            characteristics: [],
        }
        const result = {
            id: 25,
            characteristics: [
                {
                    id: 22,
                    command: 'DELETE_FROM_PARENT',
                },
                {
                    id: 23,
                    command: 'DELETE_FROM_PARENT',
                },
            ],
        }

        // eslint-disable-next-line no-undef
        expect(createValueForUpdating(initialValue, changedValue, [], 'DELETE_FROM_PARENT')).toEqual(result)
    })

    // eslint-disable-next-line no-undef
    it('create value for updating characteristic group with id only objects (delete all characteristic)', () => {
        const initialValue = {
            id: 25,
            name: 'Проверка',
            isAdminOnly: true,
            orderNumber: 11,
            characteristics: [
                {
                    id: 21,
                },
                {
                    id: 22,
                },
                {
                    id: 23,
                },
            ],
        }
        const changedValue = {
            id: 25,
            name: 'Проверка',
            isAdminOnly: true,
            orderNumber: 11,
            characteristics: [
                {
                    id: 21,
                },
                {
                    id: 22,
                },
                {
                    id: 24,
                },
            ],
        }
        const result = {
            id: 25,
            characteristics: [
                {
                    id: 24,
                },
                {
                    id: 23,
                    command: 'DELETE_FROM_PARENT',
                },
            ],
        }

        // eslint-disable-next-line no-undef
        expect(createValueForUpdating(initialValue, changedValue, [], 'DELETE_FROM_PARENT')).toEqual(result)
    })

    // eslint-disable-next-line no-undef
    it('create value for updating characteristic group with id only objects (delete all characteristic)', () => {
        const initialValue = {
            id: 25,
            name: 'Проверка',
            isAdminOnly: true,
            orderNumber: 11,
            characteristics: [],
        }
        const changedValue = {
            id: 25,
            name: 'Проверка',
            isAdminOnly: true,
            orderNumber: 11,
            characteristics: [
                {
                    id: 21,
                },
                {
                    id: 22,
                },
                {
                    id: 24,
                },
            ],
        }
        const result = {
            id: 25,
            characteristics: [
                {
                    id: 21,
                },
                {
                    id: 22,
                },
                {
                    id: 24,
                },
            ],
        }

        // eslint-disable-next-line no-undef
        expect(createValueForUpdating(initialValue, changedValue, [], 'DELETE_FROM_PARENT')).toEqual(result)
    })

    // eslint-disable-next-line no-undef
    it('create value for updating characteristic group with id only objects (without space in string properties)', () => {
        const initialValue = {
            id: 25,
            name: 'Проверка',
            isAdminOnly: true,
            orderNumber: 11,
            characteristics: [],
        }
        const changedValue = {
            id: 25,
            name: ' Проверка ',
            isAdminOnly: true,
            orderNumber: 11,
            characteristics: [],
        }
        const result = null

        // eslint-disable-next-line no-undef
        expect(createValueForUpdating(initialValue, changedValue, [], 'DELETE_FROM_PARENT')).toEqual(result)
    })
})

// eslint-disable-next-line no-undef
describe('testing function "leaveIdOnlyInObject"', () => {
    // eslint-disable-next-line no-undef
    it('convert fields is empty', () => {
        const objectData = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
            characteristicGroup: null,
            characteristicValues: [
                {
                    id: 0,
                    value: 'someName',
                    characteristic: 0,
                },
            ],
        }
        // eslint-disable-next-line no-undef
        expect(leaveIdOnlyInObject(objectData)).toEqual(objectData)
    })

    // eslint-disable-next-line no-undef
    it('convert fields is not empty', () => {
        const objectData = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
            characteristicGroup: null,
            characteristicValues: [
                {
                    id: 0,
                    value: 'someName',
                    characteristic: 0,
                },
            ],
        }
        const convertObjectData = {
            id: 0,
            name: 'someName',
            isAdminOnly: true,
            isAvailableInFilter: true,
            orderNumber: 0,
            characteristicGroup: null,
            characteristicValues: [
                {
                    id: 0,
                },
            ],
        }
        // eslint-disable-next-line no-undef
        expect(leaveIdOnlyInObject(objectData, ['characteristicValues'])).toEqual(convertObjectData)
    })

    // eslint-disable-next-line no-undef
    it('object has empty objects and empty arrays and empty array of empty objects)', () => {
        const objectData = {
            id: 0,
            name: 'someName',
            isAdminOnly: {},
            isAvailableInFilter: [],
            orderNumber: [{}, {}, {}],
            characteristicGroup: null,
            characteristicValues: [
                {
                    id: 0,
                    value: 'someName',
                    characteristic: 0,
                },
            ],
        }
        const convertObjectData = {
            id: 0,
            name: 'someName',
            isAdminOnly: {},
            isAvailableInFilter: [],
            orderNumber: [{}, {}, {}],
            characteristicGroup: null,
            characteristicValues: [
                {
                    id: 0,
                },
            ],
        }
        // eslint-disable-next-line no-undef
        expect(leaveIdOnlyInObject(objectData, ['characteristicValues'])).toEqual(convertObjectData)
    })
})
