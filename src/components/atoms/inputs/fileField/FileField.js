import React from 'react'
import { styled } from '@mui/material'

const InputStyled = styled('input', {
    name: 'InputStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const FileField = ({ refer, ...rest }) => {
    return <InputStyled type={'file'} ref={refer} {...rest} />
}

export default FileField
