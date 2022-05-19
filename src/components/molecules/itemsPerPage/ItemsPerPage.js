import React from 'react'
import ToggleButtonGroup from '../../atoms/toggleButtonGroup/ToggleButtonGroup'
import ToggleButton from '../../atoms/toggleButton/ToggleButton'
import Typography from '../../atoms/textElements/typography/Typography'
import { createStyled } from '../../../services/style/createStyled'

const ItemsOnPageStyled = createStyled('ItemsOnPageStyle', 'div')

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
