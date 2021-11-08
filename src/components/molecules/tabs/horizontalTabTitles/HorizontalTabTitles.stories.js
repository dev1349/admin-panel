import React from 'react'
import HorizontalTabTitles from './HorizontalTabTitles'

export default {
    title: 'molecules/tabs/HorizontalTabTitles',
    component: HorizontalTabTitles,
}

const Template = args => <HorizontalTabTitles {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    titles: ['Item One', 'Item two', 'Item three'],
    value: 0,
    onChange: () => console.log('changeTab'),
}
