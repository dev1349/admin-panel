import React from 'react'
import TextSnippetIcon from '@mui/icons-material/TextSnippet'
import { createStyled } from '../../../../services/style/createStyled'

const CharacteristicIconStyled = createStyled('CharacteristicIconStyle', TextSnippetIcon, 'dialogIcon')

const CharacteristicIconAtom = props => {
    return <CharacteristicIconStyled {...props} />
}

export default CharacteristicIconAtom
