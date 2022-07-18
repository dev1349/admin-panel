import React from 'react'
import Switch from '../../../atoms/inputs/switch/Switch'

const SwitchMolecules = ({ id, name, checked, onChange, ...rest }) => {
    const handleChange = () => {
        onChange({ [name]: !checked })
    }

    return <Switch id={id} name={name} checked={checked} onChange={handleChange} {...rest} />
}

export default SwitchMolecules
