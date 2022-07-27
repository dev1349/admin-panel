import React from 'react'
import { createStyled } from '../../../../services/style/createStyled'

const CarouselContainerStyled = createStyled('CarouselContainerStyle', 'div')

const CarouselContainer = ({ children }) => {
    return <CarouselContainerStyled>{children}</CarouselContainerStyled>
}

export default CarouselContainer
