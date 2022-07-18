import React from 'react'
import ImportExportIcon from '@mui/icons-material/ImportExport'
import { createStyled } from '../../../../services/style/createStyled'

const ImportExportIconStyled = createStyled('ImportExportIconStyle', ImportExportIcon)

const ImportExportIconWS = props => {
    return <ImportExportIconStyled {...props} />
}

export default ImportExportIconWS
