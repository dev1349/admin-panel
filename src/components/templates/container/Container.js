import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const ContainerStyled = createStyled('ContainerStyle', 'div', [
    'tabsContainer',
    'tabPanelContent',
    'imageListBorder',
    'imageListItems',
    'imageListItem',
    'imageInImageListContainer',
    'uploadImageButtonToImageListContainer',
    'deleteButtonContainerInImageList',
    'checkIconContainerInImageList',
    'characteristicSetPaddingTop',
    'characteristicSetTitle',
    'characteristicGroupTitleContainer',
    'labeledSelectFieldWithButtonContainer',
    'labelOfSelectFieldWithButtonContainer',
    'selectOfSelectFieldWithButtonContainer',
    'buttonOfSelectFieldWithButtonContainer',
    'textFieldWithButtonTemplate',
    'textFieldOfTextFieldWithButtonTemplate',
    'checkedImageContainerInImageList',
    'modalContentPadding',
])

const Container = ({ children, ...rest }) => {
    return <ContainerStyled {...rest}>{children}</ContainerStyled>
}

export default Container
