import React from 'react'
import { Select } from '@mui/material'
import { createStyled } from '../../../../../services/style/createStyled'

const SelectStyled = createStyled('SelectStyle', Select, 'forTable')

const WSSelect = ({ children, ...rest }) => {
    return <SelectStyled {...rest}>{children}</SelectStyled>
}

export default WSSelect
