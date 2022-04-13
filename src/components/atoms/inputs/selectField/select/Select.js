import React from 'react'
import { Select } from '@mui/material'
import { useStyle } from '../../../../../hooks/useStyle'
import SelectStyle from './SelectStyle'


const WSSelect = ({ children, ...rest }) => {
    const SelectStyled = useStyle('SelectStyled', Select, SelectStyle, 'forTable')
    return <SelectStyled {...rest}>{children}</SelectStyled>
}

export default WSSelect
