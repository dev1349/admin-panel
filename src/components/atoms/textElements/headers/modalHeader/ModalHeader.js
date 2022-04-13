import React from 'react'
import { Typography } from '@mui/material'
import { useStyle } from '../../../../../hooks/useStyle'
import ModalHeaderStyle from './ModalHeaderStyle'


const WSModalHeader = ({ children, ...rest }) => {
    const ModalHeaderStyled = useStyle('ModalHeaderStyled', Typography, ModalHeaderStyle)
    return (
        <ModalHeaderStyled
            id="modal-modal-title"
            variant="h6"
            component="h2"
            {...rest}
        >
            {children}
        </ModalHeaderStyled>
    )
}

export default WSModalHeader
