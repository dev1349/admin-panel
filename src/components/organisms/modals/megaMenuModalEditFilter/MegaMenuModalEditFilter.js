import React from 'react'
import MegaMenuModalEditFilterContent from '../megaMenuModalEditFilterContent/MegaMenuModalEditFilterContent'
import ModalContent from '../../../atoms/wrappers/modalContent/ModalContent'
import ModalWindow from '../../../atoms/modalWindow/ModalWindow'

const MegaMenuModalEditFilter = ({ open, onClose, itemIdForEdition, baseUrl, facetQueryParameter, onOpenErrorModal }) => {
    return (
        <ModalWindow
            open={open}
            onClose={onClose}
            aria-labelledby={'Пункт з фільтром'}
            aria-describedby={'mega-menu-modal-add-new-category'}
        >
            <ModalContent flexContent addMegaMenuItemContent>
                <MegaMenuModalEditFilterContent
                    open={open}
                    onClose={onClose}
                    itemIdForEdition={itemIdForEdition}
                    baseUrl={baseUrl}
                    facetQueryParameter={facetQueryParameter}
                    onOpenErrorModal={onOpenErrorModal}
                />
            </ModalContent>
        </ModalWindow>
    )
}

export default MegaMenuModalEditFilter
