import React from 'react'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import { createStyled } from '../../../../services/style/createStyled'

const FileDownloadIconStyled = createStyled(
    'FileDownloadIconStyle',
    FileDownloadIcon
)

const FileDownloadIconWS = props => {
    return <FileDownloadIconStyled {...props} />
}

export default FileDownloadIconWS
