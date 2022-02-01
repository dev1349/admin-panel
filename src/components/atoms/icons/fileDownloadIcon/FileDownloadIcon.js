import React from 'react'
import { styled } from '@mui/material'
import FileDownloadIcon from '@mui/icons-material/FileDownload'

const FileDownloadIconStyled = styled(FileDownloadIcon, {
    name: 'FileDownloadIconStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const FileDownloadIconWS = props => {
    return <FileDownloadIconStyled {...props} />
}

export default FileDownloadIconWS
