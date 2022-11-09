import React from 'react'
import Typography from './Typography'

export default {
    title: 'atoms/textElements/Typography',
    component: Typography,
}

const Template = args => <Typography {...args} />

export const AllTypographyVariants = Template.bind({})
AllTypographyVariants.args = {
    children: 'Some text...',
    smallFontSize: true,
    mainAdminText: true,
    textAlignCenter: true,
    bold: true,
    lineHeight15: true,
    characteristicSetTitle: true,
    characteristicGroupTitle: true,
    instructionsItem: true,
}
