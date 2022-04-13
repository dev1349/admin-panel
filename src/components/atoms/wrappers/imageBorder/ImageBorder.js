import React from 'react'
import { useStyle } from '../../../../hooks/useStyle'
import ImageBorderStyle from './ImageBorderStyle'


const ImageBorder = ({ children, ...rest }) => {
    const ImageBorderStyled = useStyle('ImageBorderStyled', 'div', ImageBorderStyle, 'noSizes', 'noBorder')
    return <ImageBorderStyled {...rest}>{children}</ImageBorderStyled>
}

export default ImageBorder
