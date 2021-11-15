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
    order: 'asc',
    orderBy: 'name',
}

export default initialState
