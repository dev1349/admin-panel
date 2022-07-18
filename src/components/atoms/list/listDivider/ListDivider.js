import React from 'react'
import { Divider } from '@mui/material'
import { createStyled } from '../../../../services/style/createStyled'

const ListDividerStyled = createStyled('ListDividerStyle', Divider, ['dialogDivider'])

const ListDivider = props => {
    return <ListDividerStyled {...props} />
}

export default ListDivider
