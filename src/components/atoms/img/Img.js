import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const ImgStyled = createStyled('ImgStyle', 'img', ['logo', 'block', 'imageInImageList', 'imageInGoodList'])

const ImgAtom = ({ path, altText, ...rest }) => {
    return <ImgStyled src={path} alt={altText} {...rest} />
}

export default ImgAtom
