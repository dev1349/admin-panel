import React from 'react'
import MaxWidthTemplate from '../../templates/maxWidthTemplate/MaxWidthTemplate'
import ComponentsTable from '../../organisms/tables/componentsTable/ComponentsTable'
import componentList from './ComponentList'

const tableHeader = [
    {
        id: 0,
        label: '№',
        align: 'right',
    },
    {
        id: 1,
        label: 'Component',
    },
    {
        id: 2,
        label: 'Task',
    },
    {
        id: 3,
        label: 'Link',
    },
]

const ComponentsTablePage = () => {
    return (
        <MaxWidthTemplate>
            <ComponentsTable
                tableHeader={tableHeader}
                tableRows={componentList}
            />
        </MaxWidthTemplate>
    )
}

export default ComponentsTablePage
