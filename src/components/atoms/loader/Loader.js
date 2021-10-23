import React from 'react'
import { CircularProgress } from '@mui/material'
import Box from '@mui/material/Box'

const MyLoader = props => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: '1500',
            }}
        >
            <CircularProgress {...props} />
        </Box>
    )
}

export default MyLoader
