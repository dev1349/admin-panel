const initialState = {
    attributeGroupItems: [],
    fetchStatus: 'idle',
    attributeGroupMode: 'list',
    addAttributeGroupFields: {
        name: '',
        uaName: '',
        sortOrder: null,
    },
    forDeleting: [],
    sortOrder: 'none',
    order: 'asc',
    orderBy: 'name',
}

export default initialState
