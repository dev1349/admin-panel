import React from 'react'
import {Badge} from '@mui/material'
import TestAtomStyle from './TestAtomStyle'
import {useStyle} from '../../../hooks/useStyle'

// todo удалить после рефакторинга стилей
const TestAtom = ({children, ...rest}) => {

    const TestAtomStyled = useStyle('TestAtomStyled', Badge, TestAtomStyle)

    return <TestAtomStyled {...rest}>{children} </TestAtomStyled>
}

export default TestAtom
