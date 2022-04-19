import React from 'react'
import { useStyle } from '../../../hooks/useStyle'


const ImgWS = ({ path, altText, ...rest }) => {
    const ImgStyled = useStyle('ImgStyle', 'img', 'logo', 'block')
    return <ImgStyled src={path} alt={altText} {...rest} />
}

export default ImgWS
