import React from 'react'
import FlexTemplate from './FlexTemplate'

export default {
    title: 'templates/FlexTemplate',
    component: FlexTemplate,
}

const Template = args => <FlexTemplate {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: [
        <div key={0} style={{ height: '20px', width: '30px', backgroundColor: 'blue' }} />,
        <div key={1} style={{ height: '40px', width: '60px', backgroundColor: 'red' }} />,
    ],
}

export const Example2 = Template.bind({})
Example2.args = {
    children: [
        <div key={0} style={{ height: '20px', width: '30px', backgroundColor: 'blue' }} />,
        <div key={1} style={{ height: '40px', width: '60px', backgroundColor: 'red' }} />,
    ],
    alignItemsCenter: true,
    justifyContentRight: true,
    noWrap: true,
}

export const Example3 = Template.bind({})
Example3.args = {
    children: [
        <div key={0} style={{ height: '20px', width: '30px', backgroundColor: 'blue' }} />,
        <div key={1} style={{ height: '40px', width: '60px', backgroundColor: 'red' }} />,
    ],
    justifyContentCenter: true,
}

export const Example4 = Template.bind({})
Example4.args = {
    children: [
        <div key={0} style={{ height: '20px', width: '30px', backgroundColor: 'blue' }} />,
        <div key={1} style={{ height: '40px', width: '60px', backgroundColor: 'red' }} />,
    ],
    spaceBetween: true,
}

export const Example5 = Template.bind({})
Example5.args = {
    children: [
        <div key={0} style={{ height: '20px', width: '30px', backgroundColor: 'blue' }} />,
        <div key={1} style={{ height: '40px', width: '60px', backgroundColor: 'red' }} />,
    ],
    gap10: true,
}

export const Example6 = Template.bind({})
Example6.args = {
    children: [
        <div key={0} style={{ height: '20px', width: '30px', backgroundColor: 'blue' }} />,
        <div key={1} style={{ height: '40px', width: '60px', backgroundColor: 'red' }} />,
    ],
    gap7: true,
}
