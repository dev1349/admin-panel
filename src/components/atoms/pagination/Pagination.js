import React from 'react'
import { Pagination } from '@mui/material'
import { useStyle } from '../../../hooks/useStyle'


const PaginationWS = props => {
    const PaginationStyled = useStyle('PaginationStyle', Pagination)
    return <PaginationStyled {...props} />
}

export default PaginationWS
