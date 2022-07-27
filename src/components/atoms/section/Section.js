import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const StockStyled = createStyled('SectionStyle', 'div')

const Section = ({ title }) => {
    return (
        <StockStyled>
            <h3>{title}</h3>
        </StockStyled>
    )
}
export default Section
