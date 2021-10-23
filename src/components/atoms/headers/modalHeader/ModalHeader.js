import React from 'react'
import Styled from 'styled-components'
import { Typography } from '@mui/material'

const ModalHeaderStyled = Styled(Typography)`
    display: block;
    text-align: center;
`

const ModalHeader = ({ children, ...rest }) => {
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

export default ModalHeader
