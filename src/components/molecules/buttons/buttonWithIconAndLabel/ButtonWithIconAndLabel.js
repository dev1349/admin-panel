import React from 'react'
import Button from '@mui/material/Button'
import { createStyled } from '../../../../services/style/createStyled'

const ButtonWithIconAndLabelStyled = createStyled('ButtonWidthIconAndLabelStyle', Button)

const ButtonWidthIconAndLabel = ({ label, icon, ...rest }) => {
    return (
        <ButtonWithIconAndLabelStyled startIcon={icon} {...rest}>
            {label}
        </ButtonWithIconAndLabelStyled>
    )
}

export default ButtonWidthIconAndLabel
