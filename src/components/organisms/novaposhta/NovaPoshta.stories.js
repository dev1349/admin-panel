import React from 'react'
import Novaposhta from './Novaposhta'

export default {
    title: 'organisms/NovaPoshta',
    component: Novaposhta,
}

const Template = args => <Novaposhta {...args} />

export const Example1 = Template.bind({})
Example1.args = {}
