import React from 'react'
import ModalWindow from '../../../atoms/modalWindow/ModalWindow'
import ModalContent from '../../../atoms/wrappers/modalContent/ModalContent'
import MegaMenuModalAddNewFilterContent from '../megaMenuModalAddNewFilterContent/MegaMenuModalAddNewFilterContent'

const MegaMenuModalAddNewFilter = ({ open, onClose, itemsCount = 0, parentItem, baseUrl, facetQueryParameter, onOpenErrorModal }) => {
    return (
        <ModalWindow
            open={open}
            onClose={onClose}
            aria-labelledby={'Пункт з фільтром'}
            aria-describedby={'mega-menu-modal-add-new-category'}
        >
            <ModalContent flexContent addMegaMenuItemContent>
                <MegaMenuModalAddNewFilterContent
                    open={open}
                    onClose={onClose}
                    itemsCount={itemsCount}
                    parentItem={parentItem}
                    baseUrl={baseUrl}
                    facetQueryParameter={facetQueryParameter}
                    onOpenErrorModal={onOpenErrorModal}
                />
            </ModalContent>
        </ModalWindow>
    )
}

export default MegaMenuModalAddNewFilter
