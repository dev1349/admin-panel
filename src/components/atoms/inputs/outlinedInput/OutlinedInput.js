import React from 'react'
import { OutlinedInput } from '@mui/material'
import { createStyled } from '../../../../services/style/createStyled'

const OutlinedInputStyled = createStyled('OutlinedInputStyle', OutlinedInput, ['dialogInput'])

const OutlinedInputAtom = props => {
    return <OutlinedInputStyled {...props} />
}

export default OutlinedInputAtom
