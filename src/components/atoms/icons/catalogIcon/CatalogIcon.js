import React from 'react'
import StorageIcon from '@mui/icons-material/Storage'
import { createStyled } from '../../../../services/style/createStyled'

const CatalogIconStyled = createStyled('CatalogIconStyle', StorageIcon)

const CatalogIconWS = props => {
    return <CatalogIconStyled {...props} />
}

export default CatalogIconWS
