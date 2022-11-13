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
    'marginTop7',
    'imageInGoodListContainer',
    'absolutePositionInCenter',
    'maxWidthImageInGoodListContainer',
    'flexCenter',
    'flexEnd',
    'catalogContainer',
    'catalogItemsContainer',
    'catalogItemContainer',
    'catalogItemLinkContainer',
    'catalogSubItemsContainer',
    'addNewFirstLevelItemButtonContainer',
    'activeMenuItemContainer',
    'catalogSubItemContainer',
    'catalogSubSubItemContainer',
    'megaMenuShadowContainer',
    'activeCatalogSubItemContainer',
    'catalogItemButtonsContainer',
    'catalogSubItemButtonsContainer',
    'activeCatalogSubSubLevelContainer',
    'addSubSubItemsButtonContainer',
    'activeCatalogSubSubItemContainer',
    'addSubSubItemButtonsContainer',
    'addNewSecondLevelItemButtonContainer',
    'activeCatalogSubItemsContainer',
    'megaMenuModalIconTitleContainer',
    'megaMenuModalButtonsContainer',
    'megaMenuModalHeaderContainer',
    'megaMenuModalContentContainer',
    'addNewSecondLevelItemButtonHideContainer',
    'pageContentContainer',
    'imagedSwitchContainer',
    'instructionsContainer',
    'youtubeResponseContainer560315',
    'labelTooltipContainer',
    'mainContainer',
    'headerContainer',
    'adminNavAndContentContainer',
    'sideNavContainer',
    'adminMainContentContainer',
    'expandIconContainer',
])

const Container = ({ children, forwardRef, ...rest }) => {
    return (
        <ContainerStyled {...rest} ref={forwardRef}>
            {children}
        </ContainerStyled>
    )
}

export default Container
