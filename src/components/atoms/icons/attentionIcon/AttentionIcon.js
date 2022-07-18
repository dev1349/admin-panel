import React from 'react'
import ReportIcon from '@mui/icons-material/Report'
import { createStyled } from '../../../../services/style/createStyled'

const AttentionIconStyled = createStyled('AttentionIconStyle', ReportIcon, ['dialogIcon', 'alertIcon'])

const AttentionIconAtom = props => {
    return <AttentionIconStyled {...props} />
}

export default AttentionIconAtom
