import React from 'react'
import { Tab } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'


const WSTab = props => {
    const TabStyled = useStyle('TabStyled', Tab, null)
    return <TabStyled {...props} />
}

export default WSTab
