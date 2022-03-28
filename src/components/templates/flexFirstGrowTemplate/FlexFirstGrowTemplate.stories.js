import React from 'react'
import FlexFirstGrowTemplate from './FlexFirstGrowTemplate'

export default {
    title: 'templates/FlexFirstGrowTemplate',
    component: FlexFirstGrowTemplate,
}

const Template = args => (
    <div style={{ border: '1px solid red' }}>
        <FlexFirstGrowTemplate {...args} />
    </div>
)

export const Example1 = Template.bind({})
Example1.args = {
    children: [
        <div
            key={0}
            style={{
                height: '30px',
                minWidth: '30px',
                backgroundColor: 'yellow',
            }}
        />,
        <div
            key={1}
            style={{ height: '30px', width: '30px', backgroundColor: 'red' }}
        />,
        <div
            key={2}
            style={{ height: '30px', width: '30px', backgroundColor: 'blue' }}
        />,
    ],
}

export const Example2 = Template.bind({})
Example2.args = {
    children: (
        <div
            key={0}
            style={{
                height: '30px',
                minWidth: '30px',
                backgroundColor: 'yellow',
            }}
        />
    ),
}

export const Example3 = Template.bind({})
Example3.args = {
    children: [
        <div
            key={0}
            style={{
                height: '30px',
                minWidth: '30px',
                backgroundColor: 'yellow',
            }}
        />,
        <div
            key={1}
            style={{ height: '30px', width: '30px', backgroundColor: 'red' }}
        />,
        <div
            key={2}
            style={{ height: '30px', width: '30px', backgroundColor: 'blue' }}
        />,
    ],
    noPadding: true,
}

export const Example4 = Template.bind({})
Example4.args = {
    children: [
        <div
            key={0}
            style={{
                height: '100px',
                minWidth: '30px',
                backgroundColor: 'yellow',
            }}
        />,
        <div
            key={1}
            style={{ height: '60px', width: '30px', backgroundColor: 'red' }}
        />,
        <div
            key={2}
            style={{ height: '30px', width: '30px', backgroundColor: 'blue' }}
        />,
    ],
    alignItemsCenter: true,
}

export const Example5 = Template.bind({})
Example5.args = {
    children: [
        <div
            key={0}
            style={{
                height: '100px',
                minWidth: '30px',
                backgroundColor: 'yellow',
            }}
        />,
        <div
            key={1}
            style={{ height: '60px', width: '30px', backgroundColor: 'red' }}
        />,
        <div
            key={2}
            style={{ height: '30px', width: '30px', backgroundColor: 'blue' }}
        />,
    ],
    alignItemsCenter: true,
    noMargin: true,
}

export const Example6 = Template.bind({})
Example6.args = {
    children: [
        <div
            key={0}
            style={{
                height: '100px',
                minWidth: '30px',
                backgroundColor: 'yellow',
            }}
        />,
        <div
            key={1}
            style={{ height: '60px', width: '30px', backgroundColor: 'red' }}
        />,
        <div
            key={2}
            style={{ height: '30px', width: '30px', backgroundColor: 'blue' }}
        />,
        false,
        0,
    ],
    alignItemsCenter: true,
    noMargin: true,
}
