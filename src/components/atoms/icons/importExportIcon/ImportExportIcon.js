import React from 'react'
import { styled } from '@mui/material'
import ImportExportIcon from '@mui/icons-material/ImportExport'

const ImportExportIconStyled = styled(ImportExportIcon, {
    name: 'ImportExportIconStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const ImportExportIconWS = props => {
    return <ImportExportIconStyled {...props} />
}

export default ImportExportIconWS
