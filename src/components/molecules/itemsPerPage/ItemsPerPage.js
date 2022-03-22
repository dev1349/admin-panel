import React from 'react'
import { styled } from '@mui/material/styles'
import ToggleButtonGroup from '../../atoms/toggleButtonGroup/ToggleButtonGroup'
import ToggleButton from '../../atoms/toggleButton/ToggleButton'
import Typography from '../../atoms/textElements/typography/Typography'

export const ItemsOnPageStyled = styled('div', {
    name: 'ItemsOnPageStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const ItemsPerPage = ({ title, buttonValues, currentValue, onChange }) => {
    const handleChange = (event, newValue) => {
        if (newValue !== null) {
            onChange(newValue)
        }
    }

    return (
        <ItemsOnPageStyled>
            <Typography component={'div'} smallFontSize>
                {title}&nbsp;
            </Typography>
            <ToggleButtonGroup
                aria-label="items on page"
                value={currentValue}
                onChange={handleChange}
                exclusive
            >
                {buttonValues.map((value, index) => (
                    <ToggleButton
                        value={value}
                        aria-label={value}
                        key={index}
                        size={'small'}
                    >
                        {value}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </ItemsOnPageStyled>
    )
}

export default ItemsPerPage
