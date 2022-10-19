import React from 'react'
import ModalContent from '../../../atoms/wrappers/modalContent/ModalContent'
import ModalWindow from '../../../atoms/modalWindow/ModalWindow'
import Container from '../../../templates/container/Container'
import H1 from '../../../atoms/textElements/headers/H1/H1'

const MegaMenuModal = ({ open, onClose, icon, title, ariaDescribedBy, buttons, children }) => {
    return (
        <ModalWindow open={open} onClose={onClose} aria-labelledby={title} aria-describedby={ariaDescribedBy}>
            <ModalContent>
                <Container megaMenuModalHeaderContainer>
                    <Container megaMenuModalIconTitleContainer>
                        {icon}
                        <H1 megaMenuHeader>{title}</H1>
                    </Container>
                    <Container megaMenuModalButtonsContainer>{buttons}</Container>
                </Container>
                <Container megaMenuModalContentContainer>{children}</Container>
            </ModalContent>
        </ModalWindow>
    )
}

export default MegaMenuModal
