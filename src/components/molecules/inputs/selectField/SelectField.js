import React from 'react'
import FormControl from '../../../atoms/inputs/selectField/formControl/FormControl'
import Select from '../../../atoms/inputs/selectField/select/Select'
import MenuItem from '../../../atoms/inputs/selectField/menuItem/MenuItem'

const SelectField = ({ value, onChange, items, fullWidth }) => {
    return (
        <FormControl fullWidth={fullWidth}>
            <Select
                value={value}
                onChange={onChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
            >
                <MenuItem value="" disabled>
                    Выберите тип товара
                </MenuItem>
                {items.map(item => (
                    <MenuItem key={item.id} value={item}>
                        {item.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default SelectField
