import React from 'react'
import TestAtom from './TestAtom'
// import TestAtomStyle from './TestAtomStyle'
import { getVariantExample } from '../../../services/story/storyService'
// import { getExample } from '../../../hooks/storyService'

export default {
    title: 'atoms/TestAtom',
    component: TestAtom,
}

const Template = args => <TestAtom {...args} />
// Template.bind({})
// export const examples = getExample(Template, TestAtomStyle)

// export const redBig = Template.bind({ big: true })
export const big = getVariantExample(Template, 'big')

export const blue = getVariantExample(Template, 'blue')
// export const blue = getVariantExample(Template, 'blue')
//
// const arg2 = {
//     big: true
// }
//
// export const Big2 = (arg2) =>({
//     //👇  Your story implementation goes here
// });

// const ar1 = Template.bind({
//     big: true
// })
// const ar2 = Template.bind({
//     big: true,
//     blue: true
// })
//
// export const result = [ar1,ar2]

// export const Big = Template.bind({})
// Big.args = {
//     big: true
// }
//
// export const Example2 = Template.bind({})
// Example2.args = {
//     green: true
// }
//
// export const Example3 = Template.bind({})
// Example3.args = {
//     big: true,
//     blue: true
// }
