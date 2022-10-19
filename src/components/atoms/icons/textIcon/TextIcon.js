import React from 'react'
import AbcIcon from '@mui/icons-material/Abc'
import { createStyled } from '../../../../services/style/createStyled'

const AbcIconStyled = createStyled('TextIconStyle', AbcIcon, ['dialogIcon'])

const AbcIconAtom = props => {
    return <AbcIconStyled {...props} />
}

export default AbcIconAtom
