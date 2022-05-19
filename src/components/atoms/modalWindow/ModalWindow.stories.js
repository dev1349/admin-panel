import React from 'react'
import ModalWindow from './ModalWindow'
import ModalContent from '../wrappers/modalContent/ModalContent'

export default {
    title: 'atoms/ModalWindow',
    component: ModalWindow,
}

const Template = args => <ModalWindow {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: (
        <ModalContent>
            <div
                style={{
                    height: '200px',
                    backgroundColor: 'yellow',
                }}
            >
                Some text in modal...
            </div>
        </ModalContent>
    ),
    open: true,
}
