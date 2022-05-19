import React from 'react'
import { createStyled } from '../../../../services/style/createStyled'

const TabPanelStyled = createStyled('TabPanelStyle', 'div')

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
