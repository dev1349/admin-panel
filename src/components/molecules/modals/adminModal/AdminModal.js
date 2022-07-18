import React from 'react'
import ModalContent from '../../../atoms/wrappers/modalContent/ModalContent'
import ModalWindow from '../../../atoms/modalWindow/ModalWindow'
import AdminPageHeader from '../../headers/adminPageHeader/AdminPageHeader'
import Box from '../../../atoms/wrappers/box/Box'
import Container from '../../../templates/container/Container'

const AdminModal = ({ open, onClose, title, description, buttons, children, ...rest }) => {
    return (
        <ModalWindow open={open} onClose={onClose} aria-labelledby={title} aria-describedby={description}>
            <ModalContent flexContent {...rest}>
                <AdminPageHeader title={title} buttons={buttons} />
                <Box maxHeight500 {...rest}>
                    <Container modalContentPadding>{children}</Container>
                </Box>
            </ModalContent>
        </ModalWindow>
    )
}

export default AdminModal
