import React from 'react'
import FormControl from '../../../atoms/inputs/selectField/formControl/FormControl'
import Select from '../../../atoms/inputs/selectField/select/Select'
import MenuItem from '../../../atoms/inputs/selectField/menuItem/MenuItem'

const SelectField = ({
    name,
    value,
    onChange,
    items,
    fullWidth,
    defaultLabel,
    isStartItemDisabled,
    autoFocus,
    disabled,
    forTable,
    ...rest
}) => {
    const changeHandler = evt => {
        onChange({ [name]: evt.target.value === '' ? null : evt.target.value })
    }
    return (
        <FormControl fullWidth={fullWidth}>
            <Select
                value={value === null || value === undefined ? '' : value}
                onChange={changeHandler}
                displayEmpty
                autoFocus={autoFocus}
                disabled={disabled}
                forTable={forTable}
                {...rest}
            >
                <MenuItem
                    key={'start'}
                    value=""
                    disabled={isStartItemDisabled}
                    forTable={forTable}
                    dialogMenuItem
                    disableRipple
                >
                    {defaultLabel}
                </MenuItem>
                {items.map(item => (
                    <MenuItem
                        key={item.id}
                        value={item.value}
                        forTable={forTable}
                        dialogMenuItem
                        disableRipple
                    >
                        {item.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default SelectField
