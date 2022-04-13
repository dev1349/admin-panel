import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import { useStyle } from '../../../../hooks/useStyle'
import CheckboxStyle from './CheckboxStyle'


const CheckboxWS = props => {
    const CheckboxStyled = useStyle('CheckboxStyled', Checkbox, CheckboxStyle, 'forTable')
    return (
        <CheckboxStyled
            {...props}
            inputProps={{ 'aria-label': 'Checkbox demo' }}
        />
    )
}

export default CheckboxWS
