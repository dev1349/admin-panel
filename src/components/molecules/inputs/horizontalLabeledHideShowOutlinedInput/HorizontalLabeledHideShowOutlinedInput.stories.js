import React from 'react'
import HorizontalLabeledHideShowOutlinedInput from './HorizontalLabeledHideShowOutlinedInput'
import TextFragment from '../../../atoms/textElements/textFragment/TextFragment'

export default {
    title: 'molecules/inputs/HorizontalLabeledHideShowOutlinedInput',
    component: HorizontalLabeledHideShowOutlinedInput,
}

const Template = args => <HorizontalLabeledHideShowOutlinedInput {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    id: 'private_key',
    label: (
        <>
            Приватный ключ<TextFragment redStar>*</TextFragment>
        </>
    ),
    value: 'some text value',
    onChange: payload => console.log(payload),
}
