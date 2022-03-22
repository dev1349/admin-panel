import React from 'react'
import { styled } from '@mui/material/styles'
import { Pagination } from '@mui/material'

export const PaginationStyled = styled(Pagination, {
    name: 'PaginationStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const PaginationWS = props => {
    return <PaginationStyled {...props} />
}

export default PaginationWS
