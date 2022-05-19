import React from 'react'
import ModalContent from './ModalContent'

export default {
    title: 'atoms/wrappers/ModalContent',
    component: ModalContent,
}

const Template = args => <ModalContent {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: (
        <div
            style={{
                height: '200px',
                backgroundColor: 'yellow',
            }}
        >
            Some text in modal...
        </div>
    ),
}
