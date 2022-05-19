import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import { createStyled } from '../../../../services/style/createStyled'

const CheckboxStyled = createStyled('CheckboxStyle', Checkbox, [
    'forTable',
    'dialogCheckbox',
])

const CheckboxAtom = props => {
    return <CheckboxStyled {...props} />
}

export default CheckboxAtom
