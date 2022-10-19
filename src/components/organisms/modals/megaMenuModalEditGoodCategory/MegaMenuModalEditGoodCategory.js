import React from 'react'
import ModalContent from '../../../atoms/wrappers/modalContent/ModalContent'
import ModalWindow from '../../../atoms/modalWindow/ModalWindow'
import MegaMenuModalEditGoodCategoryContent from '../megaMenuModalEditGoodCategoryContent/megaMenuModalEditGoodCategoryContent'

const MegaMenuModalEditGoodCategory = ({ open, onClose, itemIdForEdition, baseUrl, onOpenErrorModal }) => {
    return (
        <ModalWindow
            open={open}
            onClose={onClose}
            aria-labelledby={'Пункт з фільтром'}
            aria-describedby={'mega-menu-modal-add-new-category'}
        >
            <ModalContent flexContent addMegaMenuItemContent>
                <MegaMenuModalEditGoodCategoryContent
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

export default MegaMenuModalEditGoodCategory
