import React from 'react'
import ModalContent from '../../../atoms/wrappers/modalContent/ModalContent'
import AdminPageBorder from '../../../atoms/wrappers/adminPageBorder/AdminPageBorder'
import ModalWindow from '../../../atoms/modalWindow/ModalWindow'
import AdminPageHeader from '../../headers/adminPageHeader/AdminPageHeader'
import Box from '../../../atoms/wrappers/box/Box'

const AdminModal = ({ open, onClose, title, description, buttons, children }) => {
    return (
        <ModalWindow open={open} onClose={onClose} aria-labelledby={title} aria-describedby={description}>
            <ModalContent flexContent>
                <AdminPageHeader title={title} buttons={buttons} />
                <Box maxHeight500>
                    <AdminPageBorder>{children}</AdminPageBorder>
                </Box>
            </ModalContent>
        </ModalWindow>
    )
}

export default AdminModal
