import React from 'react'
import ImportExportIcon from '@mui/icons-material/ImportExport'
import { useStyle } from '../../../../hooks/useStyle'


const ImportExportIconWS = props => {
    const ImportExportIconStyled = useStyle('ImportExportIconStyle', ImportExportIcon)
    return <ImportExportIconStyled {...props} />
}

export default ImportExportIconWS
