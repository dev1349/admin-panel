import React from 'react'
import Styled from 'styled-components'
import { Button } from '@mui/material'

const ButtonStyled = Styled(Button)``

const MyButton = ({ children, modalType, ...rest }) => {
    return (
        <ButtonStyled color={modalType} variant={'contained'} {...rest}>
            {children}
        </ButtonStyled>
    )
}

export default MyButton
