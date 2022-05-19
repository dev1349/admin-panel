import React from 'react'
import { Badge } from '@mui/material'
import { createStyled } from '../../../services/style/createStyled'

const TestAtomStyled = createStyled('TestAtomStyle', Badge)

// todo удалить после рефакторинга стилей
const TestAtom = ({ children, ...rest }) => {
    return <TestAtomStyled {...rest}>{children} </TestAtomStyled>
}

export default TestAtom
