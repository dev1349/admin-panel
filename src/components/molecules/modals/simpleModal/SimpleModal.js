import React from 'react'
import { Modal } from '@mui/material'
import Box from '@mui/material/Box'
import VerticalModalTemplate from '../../../templates/verticalModalTemplate/VerticalModalTemplate'
import ModalHeader from '../../../atoms/textElements/headers/modalHeader/ModalHeader'
import SimpleButton from '../../../atoms/simpleButton/SimpleButton'
import { createStyled } from '../../../../services/style/createStyled'

const SimpleModalStyled = createStyled('SimpleModalStyle', Box)
const ZIndexedModalStyled = createStyled('ZIndexedModalStyle', Modal)

const WSSimpleModal = ({ modalText, modalType, action, ...rest }) => {
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
