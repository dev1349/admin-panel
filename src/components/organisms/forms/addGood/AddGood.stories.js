import React from 'react'
import AddGood from './AddGood'

export default {
    title: 'organisms/forms/AddGood',
    component: AddGood,
}

const Template = args => <AddGood {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    allGoodType: [
        { id: 0, name: 'one' },
        { id: 1, name: 'two' },
        { id: 2, name: 'three' },
    ],
    handleChange: () => console.log('change'),
    handleChangeSelect: () => console.log('change select'),
    handleSubmit: () => console.log('submit'),
    values: {
        name: 'Название продукта',
        description: 'Описание продукта',
        price: 50,
        salePrice: 45,
    },
}
