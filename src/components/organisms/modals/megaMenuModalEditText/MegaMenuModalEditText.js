import React from 'react'
import ModalContent from '../../../atoms/wrappers/modalContent/ModalContent'
import ModalWindow from '../../../atoms/modalWindow/ModalWindow'
import MegaMenuModalEditTextContent from '../megaMenuModalEditTextContent/MegaMenuModalEditTextContent'

const MegaMenuModalEditText = ({ open, onClose, itemIdForEdition, onOpenErrorModal }) => {
    return (
        <ModalWindow
            open={open}
            onClose={onClose}
            aria-labelledby={'Пункт без посилання'}
            aria-describedby={'mega-menu-modal-add-new-category'}
        >
            <ModalContent flexContent addMegaMenuItemContent>
                <MegaMenuModalEditTextContent
                    open={open}
                    onClose={onClose}
                    itemIdForEdition={itemIdForEdition}
                    onOpenErrorModal={onOpenErrorModal}
                />
            </ModalContent>
        </ModalWindow>
    )
}

export default MegaMenuModalEditText
