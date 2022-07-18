import React from 'react'
import { createStyled } from '../../../../services/style/createStyled'
import { Tabs } from '@mui/material'

const TabsStyled = createStyled('TabsStyle', Tabs, ['dialogTabs'])

const TabsAtom = ({ children, ...rest }) => {
    return <TabsStyled {...rest}>{children}</TabsStyled>
}

export default TabsAtom
