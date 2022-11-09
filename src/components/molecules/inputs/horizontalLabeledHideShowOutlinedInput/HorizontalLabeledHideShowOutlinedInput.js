import React, { useState } from 'react'
import Container from '../../../templates/container/Container'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import OutlinedInput from '../../../atoms/inputs/outlinedInput/OutlinedInput'
import IconButton from '../../buttons/iconButton/IconButton'
import ShowIcon from '../../../atoms/icons/showIcon/ShowIcon'
import HideIcon from '../../../atoms/icons/hideIcon/HideIcon'
import FormControl from '../../../atoms/inputs/formControl/FormControl'

const HorizontalLabeledHideShowOutlinedInput = ({ id, label, value, onChange, placeholder, onFocus, onBlur }) => {
    const [inputType, setInputType] = useState('password')

    const handleShowPrivateKey = () => setInputType('text')

    const handleHidePrivateKey = () => setInputType('password')

    const handleOnChange = event => onChange(event.target.value === '' ? null : event.target.value)

    return (
        <FormControl labelHideShowInputContainer>
            <InputLabel htmlFor={id} shrink dialogLabel>
                {label}
            </InputLabel>
            <Container>
                <OutlinedInput
                    id={id}
                    type={inputType}
                    value={value ? value : ''}
                    onChange={handleOnChange}
                    placeholder={placeholder}
                    dialogInput
                    fullWidth
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
                {inputType === 'password' && (
                    <IconButton dialogButton disableRipple onClick={handleShowPrivateKey}>
                        <ShowIcon />
                    </IconButton>
                )}
                {inputType === 'text' && (
                    <IconButton dialogButton disableRipple onClick={handleHidePrivateKey}>
                        <HideIcon />
                    </IconButton>
                )}
            </Container>
        </FormControl>
    )
}

export default HorizontalLabeledHideShowOutlinedInput
