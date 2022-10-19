import React from 'react'
import ModalContent from '../../../atoms/wrappers/modalContent/ModalContent'
import ModalWindow from '../../../atoms/modalWindow/ModalWindow'
import MegaMenuModalAddNewCategoryContent from '../megaMenuModalAddNewCategoryContent/MegaMenuModalAddNewCategoryContent'

const MegaMenuModalAddNewCategory = ({ open, onClose, itemsCount = 0, parentItem, baseUrl, onOpenErrorModal }) => {
    return (
        <ModalWindow
            open={open}
            onClose={onClose}
            aria-labelledby={'Пункт з фільтром'}
            aria-describedby={'mega-menu-modal-add-new-category'}
        >
            <ModalContent flexContent addMegaMenuItemContent>
                <MegaMenuModalAddNewCategoryContent
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

export default MegaMenuModalAddNewCategory
