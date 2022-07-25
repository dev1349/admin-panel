import React from 'react'
import ToggleButtonGroup from '../../atoms/toggleButtonGroup/ToggleButtonGroup'
import ToggleButton from '../../atoms/toggleButton/ToggleButton'
import Typography from '../../atoms/textElements/typography/Typography'
import Container from '../../templates/container/Container'

const ItemsPerPage = ({ title, buttonValues, currentValue, onChange, disabled }) => {
    const handleChange = (event, newValue) => {
        if (newValue !== null) {
            onChange(newValue)
        }
    }

    return (
        <Container flexEnd>
            <Typography component={'div'} mainAdminText>
                {title}&nbsp;
            </Typography>
            <ToggleButtonGroup aria-label="items on page" value={currentValue} onChange={handleChange} exclusive>
                {buttonValues.map((value, index) => (
                    <ToggleButton value={value} aria-label={value} key={index} dialogToggleButton disableRipple disabled={disabled}>
                        {value}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </Container>
    )
}

export default ItemsPerPage
