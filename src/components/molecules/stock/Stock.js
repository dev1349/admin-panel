import React from 'react'
import { createStyled } from '../../../services/style/createStyled'
import Carousel from '../carousel/Carousel'
import Section from '../../atoms/section/Section'
import List from '../../atoms/cardStock/сlasses/List'

const StockStyled = createStyled('StockStyle', 'section')

const Stock = () => {
    const list = new List()
    return (
        <StockStyled>
            <Section title={'Акции'} />
            <Carousel list={list.cardList} />
        </StockStyled>
    )
}
export default Stock
