import React from 'react'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import Switch from '../switch/Switch'
import Container from '../../../templates/container/Container'
import FormControl from '../../../atoms/inputs/formControl/FormControl'

const HorizontalLabeledSwitch = ({ id, label, ...rest }) => {
    return (
        <FormControl labelSwitchContainer>
            <InputLabel htmlFor={id} shrink dialogLabel>
                {label}
            </InputLabel>
            <Container>
                <Switch id={id} {...rest} dialogSwitch disableRipple />
            </Container>
        </FormControl>
    )
}

export default HorizontalLabeledSwitch
