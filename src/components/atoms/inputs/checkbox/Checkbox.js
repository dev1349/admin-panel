import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import styled from 'styled-components'

const CheckboxStyled = styled(Checkbox)``

const MyCheckbox = props => {
    return (
        <CheckboxStyled
            {...props}
            inputProps={{ 'aria-label': 'Checkbox demo' }}
        />
    )
}

export default MyCheckbox
