import React from 'react'
import { styled } from '@mui/material'
import { Typography } from '@mui/material'

const ModalHeaderStyled = styled(Typography, {
    name: 'ModalHeaderStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

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
