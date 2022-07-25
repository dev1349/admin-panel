import React from 'react'
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial'
import { createStyled } from '../../../../services/style/createStyled'

const GoodIconStyled = createStyled('GoodIconStyle', FolderSpecialIcon, ['dialogIcon'])

const GoodIconAtom = props => {
    return <GoodIconStyled {...props} />
}

export default GoodIconAtom
