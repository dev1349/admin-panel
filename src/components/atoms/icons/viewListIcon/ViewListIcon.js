import React from 'react'
import ViewListIcon from '@mui/icons-material/ViewList'
import { createStyled } from '../../../../services/style/createStyled'

const ViewListIconStyled = createStyled('ViewListIconStyle', ViewListIcon, 'dialogIcon')

const ViewListIconAtom = props => {
    return <ViewListIconStyled {...props} />
}

export default ViewListIconAtom
