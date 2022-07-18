import React from 'react'
import { ExpandMore } from '@mui/icons-material'
import { createStyled } from '../../../../services/style/createStyled'

const ExpandMoreIconStyled = createStyled('ExpandMoreIconStyle', ExpandMore, 'dialogIcon')

const ExpandMoreIconWS = props => {
    return <ExpandMoreIconStyled {...props} />
}

export default ExpandMoreIconWS
