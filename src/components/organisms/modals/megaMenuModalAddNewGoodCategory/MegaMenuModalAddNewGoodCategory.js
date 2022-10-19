import React from 'react'
import ModalWindow from '../../../atoms/modalWindow/ModalWindow'
import ModalContent from '../../../atoms/wrappers/modalContent/ModalContent'
import MegaMenuModalAddNewGoodCategoryContent from '../megaMenuModalAddNewGoodCategoryContent/MegaMenuModalAddNewGoodCategoryContent'

const MegaMenuModalAddNewGoodCategory = ({ open, onClose, itemsCount = 0, parentItem, baseUrl, onOpenErrorModal }) => {
    return (
        <ModalWindow
            open={open}
            onClose={onClose}
            aria-labelledby={'Пункт з товарами'}
            aria-describedby={'mega-menu-modal-add-new-category'}
        >
            <ModalContent flexContent addMegaMenuItemContent>
                <MegaMenuModalAddNewGoodCategoryContent
                    open={open}
                    onClose={onClose}
                    itemsCount={itemsCount}
                    parentItem={parentItem}
                    baseUrl={baseUrl}
                    onOpenErrorModal={onOpenErrorModal}
                />
            </ModalContent>
        </ModalWindow>
    )
}

export default MegaMenuModalAddNewGoodCategory
