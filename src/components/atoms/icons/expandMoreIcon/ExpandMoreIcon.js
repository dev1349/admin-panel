import React from 'react'
import { styled } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

const ExpandMoreIconStyled = styled(ExpandMore, {
    name: 'ExpandMoreIconStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const ExpandMoreIconWS = props => {
    return <ExpandMoreIconStyled {...props} />
}

export default ExpandMoreIconWS
