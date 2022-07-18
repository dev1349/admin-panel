import React from 'react'
import CategoryIcon from '@mui/icons-material/Category'
import { createStyled } from '../../../../services/style/createStyled'

const CategoryIconStyled = createStyled('CategoryIconStyle', CategoryIcon, 'dialogIcon')

const CategoryIconWS = props => {
    return <CategoryIconStyled {...props} />
}

export default CategoryIconWS
