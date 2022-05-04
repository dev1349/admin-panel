import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import { useStyle } from '../../../../hooks/useStyle'


const CheckboxWS = props => {
    const CheckboxStyled = useStyle('CheckboxStyle', Checkbox, 'forTable')
    return (
        <CheckboxStyled
            {...props}
            inputProps={{ 'aria-label': 'Checkbox demo' }}
        />
    )
}

export default CheckboxWS
