import React from 'react'
import { Modal, styled } from '@mui/material'
import Box from '@mui/material/Box'
import VerticalModalTemplate from '../../../templates/verticalModalTemplate/VerticalModalTemplate'
import ModalHeader from '../../../atoms/textElements/headers/modalHeader/ModalHeader'
import SimpleButton from '../../../atoms/simpleButton/SimpleButton'

export const SimpleModalStyled = styled(Box, {
    name: 'SimpleModalStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

export const ZIndexedModalStyled = styled(Modal, {
    name: 'ZIndexedModalStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

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
