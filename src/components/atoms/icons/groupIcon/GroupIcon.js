import React from 'react'
import DataArrayIcon from '@mui/icons-material/DataArray'
import { createStyled } from '../../../../services/style/createStyled'

const GroupIconStyled = createStyled('GroupIconStyle', DataArrayIcon, 'dialogIcon')

const GroupIconAtom = props => {
    return <GroupIconStyled {...props} />
}

export default GroupIconAtom
