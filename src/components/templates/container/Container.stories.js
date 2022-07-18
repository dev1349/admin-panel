import React from 'react'
import Container from './Container'

export default {
    title: 'templates/Container',
    component: Container,
}

const Template = args => <Container {...args} />

export const ContainerDefault = Template.bind({})
ContainerDefault.args = {
    children: <div style={{ width: '100px', height: '50px', content: '', backgroundColor: 'green' }}>some div)</div>,
    tabsContainer: false,
    tabPanelContent: false,
    imageListBorder: false,
    imageListItems: false,
    imageListItem: false,
    imageInImageListContainer: false,
    uploadImageButtonToImageListContainer: false,
    deleteButtonContainerInImageList: false,
    checkIconContainerInImageList: false,
    characteristicSetPaddingTop: false,
    characteristicSetTitle: false,
    characteristicGroupTitleContainer: false,
    labeledSelectFieldWithButtonContainer: false,
    labelOfSelectFieldWithButtonContainer: false,
    selectOfSelectFieldWithButtonContainer: false,
    buttonOfSelectFieldWithButtonContainer: false,
    textFieldWithButtonTemplate: false,
    textFieldOfTextFieldWithButtonTemplate: false,
    checkedImageContainerInImageList: false,
    modalContentPadding: false,
}
