import React from 'react'
import StorageIcon from '@mui/icons-material/Storage'
import { useStyle } from '../../../../hooks/useStyle'


const CatalogIconWS = props => {
    const CatalogIconStyled = useStyle('CatalogIconStyle', StorageIcon)
    return <CatalogIconStyled {...props} />
}

export default CatalogIconWS
