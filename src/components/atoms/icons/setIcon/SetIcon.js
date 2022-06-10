import React from 'react'
import DataObjectIcon from '@mui/icons-material/DataObject'
import { createStyled } from '../../../../services/style/createStyled'

const SetIconStyled = createStyled('SetIconStyle', DataObjectIcon, 'dialogIcon')

const SetIconAtom = props => {
    return <SetIconStyled {...props} />
}

export default SetIconAtom
