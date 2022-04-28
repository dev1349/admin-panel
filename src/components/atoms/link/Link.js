import React from 'react'
import { Link } from '@mui/material'
import { useStyle } from '../../../hooks/useStyle'


const LinkWS = ({ children, ...rest }) => {
    const LinkStyled = useStyle('LinkStyle', Link, ['hoverUnderline'])
    return <LinkStyled {...rest}>{children}</LinkStyled>
}

export default LinkWS
