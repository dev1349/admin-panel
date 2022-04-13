import React from 'react'
import { Modal } from '@mui/material'
import Box from '@mui/material/Box'
import VerticalModalTemplate from '../../../templates/verticalModalTemplate/VerticalModalTemplate'
import ModalHeader from '../../../atoms/textElements/headers/modalHeader/ModalHeader'
import SimpleButton from '../../../atoms/simpleButton/SimpleButton'
import { useStyle } from '../../../../hooks/useStyle'
import SimpleModalStyle from './SimpleModalStyle'
import ZIndexedModalStyle from './ZIndexedModalStyle'


const WSSimpleModal = ({ modalText, modalType, action, ...rest }) => {
    const SimpleModalStyled = useStyle('SimpleModalStyled', Box, SimpleModalStyle)
    const ZIndexedModalStyled = useStyle('ZIndexedModalStyled', Modal, ZIndexedModalStyle)
    return (
        <ZIndexedModalStyled {...rest}>
            <SimpleModalStyled>
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
            </SimpleModalStyled>
        </ZIndexedModalStyled>
    )
}

export default WSSimpleModal
