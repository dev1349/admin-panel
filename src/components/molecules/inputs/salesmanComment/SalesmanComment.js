import React from 'react'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import TextFieldMultiline from '../textFieldMultiline/TextFieldMultiline'

const SalesmanComment = ({ label, name, value, onChange }) => {
    return (
        <>
            <InputLabel htmlFor={'salesmanComment'}>{label}</InputLabel>
            <TextFieldMultiline
                id={'salesmanComment'}
                fullWidth={true}
                name={name}
                value={value}
                multiline
                rows={4}
                onChange={onChange}
            />
        </>
    )
}

export default SalesmanComment
