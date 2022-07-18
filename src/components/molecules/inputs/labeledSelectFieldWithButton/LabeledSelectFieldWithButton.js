import React from 'react'
import Container from '../../../templates/container/Container'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import SelectField from '../selectField/SelectField'

const LabeledSelectFieldWithButton = ({ id, label, button, ...rest }) => {
    return (
        <Container labeledSelectFieldWithButtonContainer>
            <Container labelOfSelectFieldWithButtonContainer>
                <InputLabel htmlFor={id}>{label}</InputLabel>
            </Container>
            <Container selectOfSelectFieldWithButtonContainer>
                <SelectField id={id} fullWidth {...rest} />
                {button && <Container buttonOfSelectFieldWithButtonContainer>{button}</Container>}
            </Container>
        </Container>
    )
}

export default LabeledSelectFieldWithButton
