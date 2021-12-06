import React from 'react'
import { styled } from '@mui/material'
import Button from '@mui/material/Button'

const ButtonWidthIconAndLabelStyled = styled(Button, {
    name: 'ButtonWidthIconAndLabelStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const ButtonWidthIconAndLabel = ({ label, icon, ...rest }) => {
    return (
        <ButtonWidthIconAndLabelStyled startIcon={icon} {...rest}>
            {label}
        </ButtonWidthIconAndLabelStyled>
    )
}

export default ButtonWidthIconAndLabel
