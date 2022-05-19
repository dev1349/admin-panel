import React from 'react'
import { Pagination } from '@mui/material'
import { createStyled } from '../../../services/style/createStyled'

const PaginationStyled = createStyled('PaginationStyle', Pagination)

const PaginationWS = props => {
    return <PaginationStyled {...props} />
}

export default PaginationWS
