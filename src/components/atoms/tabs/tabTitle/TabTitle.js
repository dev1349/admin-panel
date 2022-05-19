import React from 'react'
import { Tab } from '@mui/material'
import { createStyled } from '../../../../services/style/createStyled'

const TabTitleStyled = createStyled('TabTitleStyle', Tab)

const TabTitleAtom = props => {
    return <TabTitleStyled {...props} />
}

export default TabTitleAtom
