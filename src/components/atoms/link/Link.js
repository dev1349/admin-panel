import React from 'react'
import { Link } from '@mui/material'
import { useStyle } from '../../../hooks/useStyle'
import LinkStyle from './LinkStyle'


const LinkWS = ({ children, ...rest }) => {
    const LinkStyled = useStyle('LinkStyled', Link, LinkStyle, 'hoverUnderline')
    return <LinkStyled {...rest}>{children}</LinkStyled>
}

export default LinkWS
