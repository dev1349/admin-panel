import React, { useState } from 'react'
import ItemsPerPage from './ItemsPerPage'

export default {
    title: 'molecules/ItemsPerPage',
    component: ItemsPerPage,
}

const Template = args => {
    const [value, setValue] = useState(25)

    return <ItemsPerPage currentValue={value} onChange={setValue} {...args} />
}

export const Example1 = Template.bind({})
Example1.args = {
    title: 'Показывать на странице:',
    buttonValues: [25, 50, 100],
}
