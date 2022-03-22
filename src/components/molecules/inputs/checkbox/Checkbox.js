import React from 'react'
import Checkbox from '../../../atoms/inputs/checkbox/Checkbox'
import FormControlLabel from '../../../atoms/inputs/formControlLabel/FormControlLabel'

const CheckboxMolecules = ({
    label,
    checked,
    onChange,
    labelPlacement,
    forFilter,
    ...rest
}) => {
    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={checked}
                    onChange={onChange}
                    size={forFilter ? 'small' : undefined}
                    forTable={forFilter || undefined}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            }
            label={label}
            labelPlacement={labelPlacement}
            smallFontSize={forFilter}
            {...rest}
        />
    )
}

export default CheckboxMolecules
