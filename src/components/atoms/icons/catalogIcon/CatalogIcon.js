import React from 'react'
import { styled } from '@mui/material'
import StorageIcon from '@mui/icons-material/Storage'

const CatalogIconStyled = styled(StorageIcon, {
    name: 'CatalogIconStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const CatalogIconWS = props => {
    return <CatalogIconStyled {...props} />
}

export default CatalogIconWS
