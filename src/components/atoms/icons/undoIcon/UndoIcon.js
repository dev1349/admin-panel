import React from 'react'
import UndoIcon from '@mui/icons-material/Undo'
import { createStyled } from '../../../../services/style/createStyled'

const UndoIconStyled = createStyled('UndoIconStyle', UndoIcon, ['dialogIcon'])

const WSUndoIcon = props => {
    return <UndoIconStyled {...props} />
}

export default WSUndoIcon
