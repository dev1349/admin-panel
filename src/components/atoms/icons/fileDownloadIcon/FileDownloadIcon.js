import React from 'react'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import { useStyle } from '../../../../hooks/useStyle'


const FileDownloadIconWS = props => {
    const FileDownloadIconStyled = useStyle('FileDownloadIconStyle', FileDownloadIcon)
    return <FileDownloadIconStyled {...props} />
}

export default FileDownloadIconWS
