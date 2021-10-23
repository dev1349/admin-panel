import React from 'react'
import VerticalModalTemplate from './VerticalModalTemplate'
import SimpleButton from '../../atoms/simpleButton/SimpleButton'
import ModalHeader from '../../atoms/headers/modalHeader/ModalHeader'

export default {
    title: 'templates/VerticalModalTemplate',
    component: VerticalModalTemplate,
}

const Template = args => <VerticalModalTemplate {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: [
        <ModalHeader key={1}>Some header texts...</ModalHeader>,
        <SimpleButton key={2} variant={'contained'}>
            Ok
        </SimpleButton>,
    ],
}
