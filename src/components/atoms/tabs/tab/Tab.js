import React from 'react'
import { Tab } from '@mui/material'
import { createStyled } from '../../../../services/style/createStyled'

const TabStyled = createStyled('TabStyle', Tab, ['dialogTab'])

const TabAtom = props => {
    return <TabStyled {...props} />
}

export default TabAtom
