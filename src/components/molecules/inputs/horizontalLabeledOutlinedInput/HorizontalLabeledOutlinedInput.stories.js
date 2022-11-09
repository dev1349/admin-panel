import React from 'react'
import HorizontalLabeledOutlinedInput from './HorizontalLabeledOutlinedInput'
import TextFragment from '../../../atoms/textElements/textFragment/TextFragment'

export default {
    title: 'molecules/inputs/HorizontalLabeledOutlinedInput',
    component: HorizontalLabeledOutlinedInput,
}

const Template = args => <HorizontalLabeledOutlinedInput {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    id: 'public_key',
    label: (
        <>
            Публичный ключ<TextFragment redStar>*</TextFragment>
        </>
    ),
    value: 'some text value',
    onChange: payload => console.log(payload),
}
