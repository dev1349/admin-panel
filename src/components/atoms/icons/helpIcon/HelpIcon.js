import React from 'react'
import { styled } from '@mui/material'
import HelpCenterIcon from '@mui/icons-material/HelpCenter'

const HelpIconStyled = styled(HelpCenterIcon, {
    name: 'HelpIconStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const HelpIconWS = props => {
    return <HelpIconStyled {...props} />
}

export default HelpIconWS
