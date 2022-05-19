import React from 'react'
import { Modal } from '@mui/material'
import { createStyled } from '../../../services/style/createStyled'

const ModalWindowStyled = createStyled('ModalWindowStyle', Modal)

const ModalWindow = ({ children, ...rest }) => {
    return <ModalWindowStyled {...rest}>{children}</ModalWindowStyled>
}

export default ModalWindow
