import React from 'react'
import { useStyle } from '../../../hooks/useStyle'
import ImgStyle from './ImgStyle'


const ImgWS = ({ path, altText, ...rest }) => {
    const ImgStyled = useStyle('ImgStyled', 'img', ImgStyle, 'logo', 'block')
    return <ImgStyled src={path} alt={altText} {...rest} />
}

export default ImgWS
