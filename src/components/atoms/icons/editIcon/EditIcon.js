import React from 'react'
import { styled } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

const EditIconStyled = styled(EditIcon, {
    name: 'EditIconStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSEditIcon = props => {
    return <EditIconStyled {...props} />
}

export default WSEditIcon
