import React from 'react'
import { createStyled } from '../../../services/style/createStyled'
import { Box } from '@mui/system'

const ScrollStyled = createStyled('ScrollStyle', Box)

const Scroll = ({ progress }) => {
    const scrollSX = {
        left: progress,
    }

    return <ScrollStyled sx={scrollSX} />
}

export default Scroll
