import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const ImgStyled = createStyled('ImgStyle', 'img', ['logo', 'block'])

const ImgWS = ({ path, altText, ...rest }) => {
    return <ImgStyled src={path} alt={altText} {...rest} />
}

export default ImgWS
