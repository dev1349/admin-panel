import React, { useState } from 'react'
import Pagination from './Pagination'

export default {
    title: 'atoms/Pagination',
    component: Pagination,
}

const Template = args => {
    const [page, setPage] = useState(1)

    const handleSetPage = (event, newPage) => setPage(newPage)

    return <Pagination {...args} page={page} onChange={handleSetPage} />
}

export const Example1 = Template.bind({})
Example1.args = {
    count: 10,
    variant: 'outlined',
    shape: 'rounded',
    size: 'small',
}
