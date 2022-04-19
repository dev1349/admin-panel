import React from 'react'
import { Typography } from '@mui/material'
import { useStyle } from '../../../../../hooks/useStyle'


const WSModalHeader = ({ children, ...rest }) => {
    const ModalHeaderStyled = useStyle('ModalHeaderStyle', Typography)
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
