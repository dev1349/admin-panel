import React from 'react'
import ModalContent from '../../../atoms/wrappers/modalContent/ModalContent'
import ModalWindow from '../../../atoms/modalWindow/ModalWindow'
import MegaMenuModalAddNewTextContent from '../megaMenuModalAddNewTextContent/MegaMenuModalAddNewTextContent'

const MegaMenuModalAddNewText = ({ open, onClose, itemsCount = 0, parentItem, onOpenErrorModal }) => {
    return (
        <ModalWindow
            open={open}
            onClose={onClose}
            aria-labelledby={'Пункт без посилання'}
            aria-describedby={'mega-menu-modal-add-new-category'}
        >
            <ModalContent flexContent addMegaMenuItemContent>
                <MegaMenuModalAddNewTextContent
                    onClose={onClose}
                    itemsCount={itemsCount}
                    parentItem={parentItem}
                    onOpenErrorModal={onOpenErrorModal}
                />
            </ModalContent>
        </ModalWindow>
    )
}

export default MegaMenuModalAddNewText
