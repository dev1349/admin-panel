import React from 'react'
import Button from '@mui/material/Button'
import { useStyle } from '../../../../hooks/useStyle'


const ButtonWidthIconAndLabel = ({ label, icon, ...rest }) => {
    const ButtonWidthIconAndLabelStyled = useStyle('ButtonWidthIconAndLabelStyled', Button, null)
    return (
        <ButtonWidthIconAndLabelStyled startIcon={icon} {...rest}>
            {label}
        </ButtonWidthIconAndLabelStyled>
    )
}

export default ButtonWidthIconAndLabel
