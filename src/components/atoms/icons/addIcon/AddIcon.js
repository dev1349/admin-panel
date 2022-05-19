import React from 'react'
import AddIcon from '@mui/icons-material/Add'
import { createStyled } from '../../../../services/style/createStyled'

const AddIconStyled = createStyled('AddIconStyle', AddIcon, 'dialogIcon')

const AddIconAtom = props => {
    return <AddIconStyled {...props} />
}

export default AddIconAtom
