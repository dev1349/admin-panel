import React from 'react'
import { Typography } from '@mui/material'
import { createStyled } from '../../../../../services/style/createStyled'

const ModalHeaderStyled = createStyled('ModalHeaderStyle', Typography)

const WSModalHeader = ({ children, ...rest }) => {
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
