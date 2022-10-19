import React from 'react'
import ModalWindow from '../../../atoms/modalWindow/ModalWindow'
import ModalContent from '../../../atoms/wrappers/modalContent/ModalContent'
import MegaMenuModalEditCategoryContent from '../megaMenuModalEditCategoryContent/MegaMenuModalEditCategoryContent'

const MegaMenuModalEditCategory = ({ open, onClose, itemIdForEdition, baseUrl, onOpenErrorModal }) => {
    return (
        <ModalWindow
            open={open}
            onClose={onClose}
            aria-labelledby={'Пункт з фільтром'}
            aria-describedby={'mega-menu-modal-add-new-category'}
        >
            <ModalContent flexContent addMegaMenuItemContent>
                <MegaMenuModalEditCategoryContent
                    open={open}
                    onClose={onClose}
                    itemIdForEdition={itemIdForEdition}
                    baseUrl={baseUrl}
                    onOpenErrorModal={onOpenErrorModal}
                />
            </ModalContent>
        </ModalWindow>
    )
}

export default MegaMenuModalEditCategory
