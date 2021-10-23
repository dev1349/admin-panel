import React from 'react'
import styled from 'styled-components'
import NumberField from '../../atoms/inputs/numberField/NumberField'
import InputLabel from '../../atoms/inputs/inputLabel/InputLabel'
import LabeledInputTemplate from './LabeledInputTemplate'

//todo: удалить после перехода на atomic design
export default {
    title: 'templates/LabeledInputTemplate',
    component: LabeledInputTemplate,
}

const InputLabelStyled = styled(InputLabel)``
const NumberFieldStyled = styled(NumberField)``

const Template = args => <LabeledInputTemplate {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: [
        <InputLabelStyled htmlFor={1} key={0}>
            {'some text...'}
        </InputLabelStyled>,
        <NumberFieldStyled
            key={1}
            id={1}
            fullWidth={true}
            name={'name'}
            pattern={null}
            value={'some value'}
            onChange={() => alert('change')}
            onKeyDown={() => alert('keyDown')}
            autoFocus={true}
        />,
    ],
}
