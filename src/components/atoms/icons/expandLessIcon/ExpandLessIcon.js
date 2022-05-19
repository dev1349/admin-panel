import React from 'react'
import { ExpandLess } from '@mui/icons-material'
import { createStyled } from '../../../../services/style/createStyled'

const ExpandLessIconStyled = createStyled(
    'ExpandLessIconStyle',
    ExpandLess,
    'dialogIcon'
)

const ExpandLessIconWS = props => {
    return <ExpandLessIconStyled {...props} />
}

export default ExpandLessIconWS
