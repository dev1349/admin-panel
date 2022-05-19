import React from 'react'
import ModalContent from '../../../atoms/wrappers/modalContent/ModalContent'
import AdminModalHeader from '../../headers/adminModalHeader/AdminModalHeader'
import AdminPageBorder from '../../../atoms/wrappers/AdminPageBorder/AdminPageBorder'
import FlexTemplate from '../../../templates/flexTemplate/FlexTemplate'
import Box from '../../../atoms/wrappers/Box/Box'
import AttentionIcon from '../../../atoms/icons/attentionIcon/AttentionIcon'
import Typography from '../../../atoms/textElements/typography/Typography'
import Button from '../../../atoms/button/Button'
import ModalWindow from '../../../atoms/modalWindow/ModalWindow'

const DeleteModal = ({ open, onClose, title, description }) => {
    return (
        <ModalWindow
            open={open}
            onClose={onClose}
            aria-labelledby={title}
            aria-describedby={description}
        >
            <ModalContent>
                <AdminModalHeader title={title} />
                <AdminPageBorder>
                    <FlexTemplate
                        alignItemsCenter
                        justifyContentCenter
                        directionColumn
                    >
                        <Box marginTop7>
                            <AttentionIcon alertIcon />
                        </Box>
                        <Box marginTop7>
                            <Typography mainAdminText textAlignCenter>
                                {description}
                            </Typography>
                        </Box>
                        <Box marginTop7>
                            <FlexTemplate justifyContentCenter gap10>
                                <Button
                                    dialogButton
                                    autoFocus
                                    disableRipple
                                    onClick={onClose}
                                >
                                    Ok
                                </Button>
                            </FlexTemplate>
                        </Box>
                    </FlexTemplate>
                </AdminPageBorder>
            </ModalContent>
        </ModalWindow>
    )
}

export default DeleteModal
