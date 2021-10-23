import React from 'react'
import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add'

const AddIconStyled = styled(AddIcon)``

const MyAddIcon = props => {
    return <AddIconStyled {...props} />
}

export default MyAddIcon
