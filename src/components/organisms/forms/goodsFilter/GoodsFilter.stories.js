import React from 'react'
import GoodsFilter from './GoodsFilter'

export default {
    title: 'organisms/forms/GoodsFilter',
    component: GoodsFilter,
}

const Template = args => <GoodsFilter {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    goodStatus: [true, false],
    goodImageStatus: [true, false],
    goodTypes: ['Тип 01', 'Тип 02', 'Тип 03'],
    filter: {
        name: null,
        price: null,
        status: null,
        model: null,
        count: null,
        imageStatus: null,
        'goodType.name': null,
    },
    setGoodsFilterHandler: () => console.log('change'),
    filteringGoodsHandler: () => console.log('filtering...'),
}
