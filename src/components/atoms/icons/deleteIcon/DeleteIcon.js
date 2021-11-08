import React from 'react'
import { styled } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

const DeleteIconStyled = styled(DeleteIcon, {
    name: 'DeleteIconStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSDeleteIcon = props => {
    return <DeleteIconStyled {...props} />
}

export default WSDeleteIcon
