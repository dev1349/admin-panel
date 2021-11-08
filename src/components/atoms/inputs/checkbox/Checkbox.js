import React from 'react'
import { styled } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'

const CheckboxStyled = styled(Checkbox, {
    name: 'CheckboxStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSCheckbox = props => {
    return (
        <CheckboxStyled
            {...props}
            inputProps={{ 'aria-label': 'Checkbox demo' }}
        />
    )
}

export default WSCheckbox
