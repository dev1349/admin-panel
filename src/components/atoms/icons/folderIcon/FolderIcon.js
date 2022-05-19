import React from 'react'
import FolderIcon from '@mui/icons-material/Folder'
import { createStyled } from '../../../../services/style/createStyled'

const FolderIconStyled = createStyled(
    'FolderIconStyle',
    FolderIcon,
    'dialogIcon'
)

const FolderIconWS = props => {
    return <FolderIconStyled {...props} />
}

export default FolderIconWS
