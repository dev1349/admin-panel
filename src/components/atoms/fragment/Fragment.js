import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const FragmentStyled = createStyled('FragmentStyle', 'span', [
    'requiredFieldStar',
    'goodPriceWithDiscount',
    'noWrap',
    'discountPrice',
    'fewGoods',
    'manyGoods',
    'inStock',
    'notInStock',
    'underTheOrder',
    'deliveryIsExpected',
    'isRunningOut',
])

const Fragment = ({ children, ...rest }) => {
    return <FragmentStyled {...rest}>{children}</FragmentStyled>
}

export default Fragment
