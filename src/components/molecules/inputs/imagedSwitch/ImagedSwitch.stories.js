import React from 'react'
import ImagedSwitch from './ImagedSwitch'
import liqPayLogo from '../../../pages/liqPayParameters/liqpay_logo.png'

export default {
    title: 'molecules/inputs/ImagedSwitch',
    component: ImagedSwitch,
}

const Template = args => <ImagedSwitch {...args} />

export const DefaultImagedSwitch = Template.bind({})
DefaultImagedSwitch.args = {
    src: liqPayLogo,
    altText: 'LiqPay',
    checked: true,
    onChange: () => console.log('changed'),
}
