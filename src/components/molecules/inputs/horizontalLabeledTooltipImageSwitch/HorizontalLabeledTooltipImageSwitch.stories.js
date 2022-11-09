import React from 'react'
import liqPayKeysImg from '../../../pages/liqPayParameters/liqpay_keys.png'
import HorizontalLabeledTooltipImageSwitch from './HorizontalLabeledTooltipImageSwitch'

export default {
    title: 'molecules/inputs/HorizontalLabeledToolTipImageSwitch',
    component: HorizontalLabeledTooltipImageSwitch,
}

const Template = args => <HorizontalLabeledTooltipImageSwitch {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    id: 'cash',
    label: 'Наличными при получении',
    checked: true,
    onChange: () => console.log('change checked'),
    tooltip: 'some tooltip text',
    image: liqPayKeysImg,
}
