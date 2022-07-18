import React from 'react'
import Container from '../../../templates/container/Container'
import TextField from '../textField/TextField'

const TextFieldWithButton = ({ button, ...rest }) => {
    return (
        <Container textFieldWithButtonTemplate>
            <Container textFieldOfTextFieldWithButtonTemplate>
                <TextField {...rest} fullWidth />
            </Container>

            {button}
        </Container>
    )
}

export default TextFieldWithButton
