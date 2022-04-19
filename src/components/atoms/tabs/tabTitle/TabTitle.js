import React from 'react'
import { Tab } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'


const WSTab = props => {
    const TabStyled = useStyle('TabStyle', Tab)
    return <TabStyled {...props} />
}

export default WSTab
