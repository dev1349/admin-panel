import React from 'react'
import { createStyled } from '../../../../services/style/createStyled'

const TabPanelStyled = createStyled('TabPanelStyle', 'div')

const TabPanel = ({ children, activeTabLink, link, index, ...rest }) => {
    return (
        <TabPanelStyled role="tabpanel" hidden={activeTabLink !== link} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`} {...rest}>
            {activeTabLink === link && children}
        </TabPanelStyled>
    )
}

export default TabPanel
