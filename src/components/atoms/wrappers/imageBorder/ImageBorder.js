import React from 'react'
import { useStyle } from '../../../../hooks/useStyle'


const ImageBorder = ({ children, ...rest }) => {
    const ImageBorderStyled = useStyle('ImageBorderStyle', 'div', 'noSizes', 'noBorder')
    return <ImageBorderStyled {...rest}>{children}</ImageBorderStyled>
}

export default ImageBorder
