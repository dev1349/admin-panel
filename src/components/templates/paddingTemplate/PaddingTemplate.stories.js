import React from 'react'
import styled from 'styled-components'
import PaddingTemplate from './PaddingTemplate'

//todo: удалить после перехода на atomic design
export default {
    title: 'templates/PaddingTemplate',
    component: PaddingTemplate,
}

const DivStyled = styled.div`
    height: 200px;
    content: '';
    background-color: yellow;
`

const Template = args => <PaddingTemplate {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: <DivStyled />,
}
