import React from 'react'
import styled from 'styled-components'
import IconButton from '@mui/material/IconButton'

const IconButtonStyled = styled(IconButton)``

const MyIconButton = ({ children, ...rest }) => {
    return <IconButtonStyled {...rest}>{children}</IconButtonStyled>
}

export default MyIconButton
