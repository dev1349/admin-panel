import React from 'react'
import { styled } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

const AddIconStyled = styled(AddIcon, {
    name: 'AddIconStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSAddIcon = props => {
    return <AddIconStyled {...props} />
}

export default WSAddIcon
