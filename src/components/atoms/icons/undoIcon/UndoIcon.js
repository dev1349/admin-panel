import React from 'react'
import UndoIcon from '@mui/icons-material/Undo'
import { useStyle } from '../../../../hooks/useStyle'


const WSUndoIcon = props => {
    const UndoIconStyled = useStyle('UndoIconStyle', UndoIcon)
    return <UndoIconStyled {...props} />
}

export default WSUndoIcon
