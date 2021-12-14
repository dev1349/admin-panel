import React, { useEffect, useState } from 'react'
import TextField from '../textField/TextField'
import Menu from '../../../atoms/menu/Menu'

const DropDownTextFieldWithValidation = ({
    id,
    name,
    value,
    onChange,
    autoFocus,
    fullWidth,
    pattern,
    helperText,
    check,
}) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [dropDownFieldValue, setDropDownFieldValue] = useState(value)
    const attentionMessage = check.reduce((acc, el) => {
        if (el.checking(dropDownFieldValue)) {
            return acc + el.attentionMessage
        }
        return acc
    }, '')
    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const handleChangeDropDownFieldValue = payload => {
        setDropDownFieldValue(payload['sub' + name])
    }
    const isChecking = check.reduce((acc, el) => {
        return acc && !el.checking(dropDownFieldValue)
    }, true)

    useEffect(() => {
        if (isChecking) {
            onChange({ [name]: dropDownFieldValue })
        }
    }, [dropDownFieldValue])

    return (
        <>
            <TextField
                id={id}
                name={name}
                value={value}
                autoFocus={autoFocus}
                fullWidth={fullWidth}
                onClick={handleClick}
                helperText={helperText}
                InputProps={{
                    readOnly: true,
                }}
            />
            <Menu
                id={`menu${id}`}
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <TextField
                    name={'sub' + name}
                    value={dropDownFieldValue}
                    onChange={handleChangeDropDownFieldValue}
                    autoFocus={true}
                    fullWidth={true}
                    pattern={pattern}
                    helperText={attentionMessage}
                    error={!isChecking}
                />
            </Menu>
        </>
    )
}

export default DropDownTextFieldWithValidation
