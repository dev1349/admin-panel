import React from 'react'
import { Pagination } from '@mui/material'
import { useStyle } from '../../../hooks/useStyle'


const PaginationWS = props => {
    const PaginationStyled = useStyle('PaginationStyled', Pagination, null)
    return <PaginationStyled {...props} />
}

export default PaginationWS
