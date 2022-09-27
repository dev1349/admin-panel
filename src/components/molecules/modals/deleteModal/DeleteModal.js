import React from 'react'
import ModalContent from '../../../atoms/wrappers/modalContent/ModalContent'
import AdminModalHeader from '../../headers/adminModalHeader/AdminModalHeader'
import AdminPageBorder from '../../../atoms/wrappers/adminPageBorder/AdminPageBorder'
import FlexTemplate from '../../../templates/flexTemplate/FlexTemplate'
import Box from '../../../atoms/wrappers/box/Box'
import AttentionIcon from '../../../atoms/icons/attentionIcon/AttentionIcon'
import Typography from '../../../atoms/textElements/typography/Typography'
import Button from '../../../atoms/button/Button'
import ModalWindow from '../../../atoms/modalWindow/ModalWindow'

const DeleteModal = ({ open, onClose, onYes, title, description, yesButtonTitle, noButtonTitle }) => {
    return (
        <ModalWindow open={open} onClose={onClose} aria-labelledby={title} aria-describedby={description}>
            <ModalContent>
                <AdminModalHeader title={title} />
                <AdminPageBorder>
                    <FlexTemplate alignItemsCenter justifyContentCenter directionColumn>
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
                                <Button dialogButton autoFocus onClick={onYes}>
                                    {yesButtonTitle}
                                </Button>
                                <Button dialogButton onClick={onClose}>
                                    {noButtonTitle}
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
