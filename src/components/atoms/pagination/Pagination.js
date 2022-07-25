import React from 'react'
import { Pagination } from '@mui/material'
import { createStyled } from '../../../services/style/createStyled'

const PaginationStyled = createStyled('PaginationStyle', Pagination, ['dialogPagination'])

const PaginationAtom = props => {
    return <PaginationStyled {...props} />
}

export default PaginationAtom
