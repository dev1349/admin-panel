import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { createStyled } from '../../../../services/style/createStyled'

const ShowIconStyled = createStyled('ShowIconStyle', VisibilityIcon, 'dialogIcon')

const ShowIconAtom = props => {
    return <ShowIconStyled {...props} />
}

export default ShowIconAtom
