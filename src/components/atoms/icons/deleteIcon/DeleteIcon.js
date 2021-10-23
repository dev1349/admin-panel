import React from 'react'
import styled from 'styled-components'
import DeleteIcon from '@mui/icons-material/Delete'

const DeleteIconStyled = styled(DeleteIcon)``

const MyDeleteIcon = props => {
    return <DeleteIconStyled {...props} />
}

export default MyDeleteIcon
