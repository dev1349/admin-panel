import React from 'react'
import StorageIcon from '@mui/icons-material/Storage'
import { useStyle } from '../../../../hooks/useStyle'


const CatalogIconWS = props => {
    const CatalogIconStyled = useStyle('CatalogIconStyled', StorageIcon, null)
    return <CatalogIconStyled {...props} />
}

export default CatalogIconWS
