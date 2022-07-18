import React from 'react'
import CheckIcon from '@mui/icons-material/Check'
import { createStyled } from '../../../../services/style/createStyled'

const CheckIconStyled = createStyled('CheckIconStyle', CheckIcon, ['dialogIcon', 'checkedIcon'])

const CheckIconAtom = props => {
    return <CheckIconStyled {...props} />
}

export default CheckIconAtom
