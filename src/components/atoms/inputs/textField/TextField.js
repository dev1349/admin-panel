import React from 'react'
import styled from 'styled-components'
import { TextField } from '@mui/material'

const TextFieldStyled = styled(TextField)``

const MyTextField = props => {
    return <TextFieldStyled {...props} />
}

export default MyTextField
