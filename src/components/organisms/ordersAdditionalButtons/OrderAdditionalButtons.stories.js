import React from 'react'
import OrderAdditionalButtons from './OrderAdditionalButtons'
import AddIcon from '../../atoms/icons/addIcon/AddIcon'

export default {
    title: 'organisms/OrderAdditionalButtons',
    component: OrderAdditionalButtons,
}

const Template = args => <OrderAdditionalButtons {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    buttons: {
        position: {
            icon: <AddIcon />,
            text: 'Позиция',
            value: 'check',
        },
        discount: {
            icon: <AddIcon />,
            text: 'Скидка',
            value: 'check',
        },
    },
}
