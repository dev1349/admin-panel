import React from 'react'
import { Badge } from '@mui/material'
import { useStyle } from '../../../hooks/useStyle'

// todo удалить после рефакторинга стилей
const TestAtom = ({ children, ...rest }) => {

    const TestAtomStyled = useStyle('TestAtomStyle', Badge)

    return <TestAtomStyled {...rest}>{children} </TestAtomStyled>
}

export default TestAtom
