import React from 'react'
import UndoIcon from '@mui/icons-material/Undo'
import styled from 'styled-components'

const UndoIconStyled = styled(UndoIcon)``

const MyUndoIcon = props => {
    return <UndoIconStyled {...props} />
}

export default MyUndoIcon
