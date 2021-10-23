import React from 'react'
import styled from 'styled-components'
import { TextField } from '@mui/material'

const TextFieldStyled = styled(TextField)``

const MyNumberField = props => {
    return <TextFieldStyled {...props} type={'number'} />
}

export default MyNumberField
