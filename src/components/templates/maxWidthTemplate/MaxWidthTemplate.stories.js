import React from 'react'
import styled from 'styled-components'
import MaxWidthTemplate from './MaxWidthTemplate'

//todo: удалить после перехода на atomic design
export default {
    title: 'templates/MaxWidthTemplate',
    component: MaxWidthTemplate,
}

const DivStyled = styled.div`
    height: 200px;
    content: '';
    background-color: yellow;
`

const Template = args => <MaxWidthTemplate {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: <DivStyled />,
}
