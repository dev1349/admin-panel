import React from 'react'
import { Tab } from '@mui/material'
import { createStyled } from '../../../../services/style/createStyled'
import { Link } from 'react-router-dom'

const LinkTabStyled = createStyled('LinkTabStyle', Tab, ['dialogTab'])

const LinkTab = props => {
    return <LinkTabStyled component={Link} {...props} />
}

export default LinkTab
