import React from 'react'
import { createStyled } from '../../../../services/style/createStyled'

const CharacteristicSetBorderStyled = createStyled('CharacteristicSetBorderStyle', 'div')

const CharacteristicSetBorder = ({ children, ...rest }) => {
    return <CharacteristicSetBorderStyled {...rest}>{children}</CharacteristicSetBorderStyled>
}

export default CharacteristicSetBorder
