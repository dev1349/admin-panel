import React from 'react'
import { Divider } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'


const ListDivider = props => {
    const ListDividerStyled = useStyle('ListDividerStyle', Divider)
    return <ListDividerStyled {...props} />
}

export default ListDivider
