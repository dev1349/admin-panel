import React from 'react'
import Styled from 'styled-components'
import { Modal } from '@mui/material'
import Box from '@mui/material/Box'
import VerticalModalTemplate from '../../../templates/verticalModalTemplate/VerticalModalTemplate'
import ModalHeader from '../../../atoms/headers/modalHeader/ModalHeader'
import SimpleButton from '../../../atoms/simpleButton/SimpleButton'

const SimpleModalStyled = Styled(Modal)``

const style = {
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400',
}

const MySimpleModal = ({ modalText, modalType, action, ...rest }) => {
    return (
        <SimpleModalStyled {...rest}>
            <Box sx={style}>
                <VerticalModalTemplate>
                    <ModalHeader>{modalText}</ModalHeader>
                    <SimpleButton
                        onClick={action}
                        modalType={modalType}
                        autoFocus={true}
                    >
                        Ok
                    </SimpleButton>
                </VerticalModalTemplate>
            </Box>
        </SimpleModalStyled>
    )
}

export default MySimpleModal
