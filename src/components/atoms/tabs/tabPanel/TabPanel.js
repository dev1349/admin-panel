import React from 'react'
import { styled } from '@mui/material/styles'

const TabPanelStyled = styled('div', {
    name: 'TabPanelStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSTabPanel = ({ children, value, index, ...other }) => {
    return (
        <TabPanelStyled
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && children}
        </TabPanelStyled>
    )
}

export default WSTabPanel
