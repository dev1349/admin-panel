import React from 'react'
import { FormControl, styled } from '@mui/material'

const FormControlStyled = styled(FormControl, {
    name: 'FormControlStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSFormControl = ({ children, ...rest }) => {
    return <FormControlStyled {...rest}>{children}</FormControlStyled>
}

export default WSFormControl
