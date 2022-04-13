import React from 'react'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import { useStyle } from '../../../../hooks/useStyle'


const FileDownloadIconWS = props => {
    const FileDownloadIconStyled = useStyle('FileDownloadIconStyled', FileDownloadIcon, null)
    return <FileDownloadIconStyled {...props} />
}

export default FileDownloadIconWS
