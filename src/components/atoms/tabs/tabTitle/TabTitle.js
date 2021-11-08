import React from 'react'
import { styled } from '@mui/material/styles'
import { Tab } from '@mui/material'

const TabStyled = styled(Tab, {
    name: 'TabStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSTab = props => {
    return <TabStyled {...props} />
}

export default WSTab
