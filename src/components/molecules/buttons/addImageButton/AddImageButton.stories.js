import React from 'react'
import AddImageButton from './AddImageButton'

export default {
    title: 'molecules/buttons/AddImageButton',
    component: AddImageButton,
}

const Template = args => <AddImageButton {...args} />

export const AddImageButtonDefault = Template.bind({})
AddImageButtonDefault.args = {
    addImage: () => console.log('click on AddImageButton'),
}
