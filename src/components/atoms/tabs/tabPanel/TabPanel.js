import React from 'react'
import { useStyle } from '../../../../hooks/useStyle'


const WSTabPanel = ({ children, value, index, ...other }) => {
    const TabPanelStyled = useStyle('TabPanelStyle', 'div')
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
