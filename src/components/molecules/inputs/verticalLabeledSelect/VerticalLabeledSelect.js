import React from 'react'
import FormControl from '../../../atoms/inputs/formControl/FormControl'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import Select from '../../../atoms/inputs/select/Select'
import MenuItem from '../../../atoms/inputs/menuItem/MenuItem'
import { isString } from '../../../../common/preparingDataForSending/preparingDataForSending'
import ListSubHeader from '../../../atoms/list/listSubHeader/ListSubHeader'

const VerticalLabeledOutlinedInput = ({
    id,
    idLabel,
    labelText,
    value,
    onChange,
    selectItems = [],
    autoFocus,
    defaultLabel = null,
    ...rest
}) => {
    const handleChange = event => onChange(event.target.value === '' ? null : event.target.value)

    return (
        <FormControl verticalLabelInput>
            <InputLabel id={idLabel}>{labelText}</InputLabel>
            <Select
                displayEmpty
                labelId={idLabel}
                id={id}
                value={value === null ? '' : value}
                onChange={handleChange}
                label={labelText}
                autoFocus={autoFocus}
                {...rest}
            >
                {defaultLabel !== null && (
                    <MenuItem value={''} disabled dialogMenuItem disableRipple>
                        {defaultLabel}
                    </MenuItem>
                )}
                {selectItems.length > 0 &&
                    selectItems.map((item, index) =>
                        isString(item) ? (
                            <ListSubHeader key={index}>{item}</ListSubHeader>
                        ) : (
                            <MenuItem key={item.id} value={item.value} disableRipple dialogMenuItem>
                                {item.label}
                            </MenuItem>
                        )
                    )}
            </Select>
        </FormControl>
    )
}

export default VerticalLabeledOutlinedInput
