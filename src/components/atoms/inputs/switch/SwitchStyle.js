export default {
    styleOverrides: {
        root: {},
    },
    variants: [
        {
            props: { dialogSwitch: true },
            style: {
                width: 47,
                height: 24,
                padding: 0,
                '& .MuiSwitch-switchBase': {
                    padding: 0,
                    margin: 0,
                    '&.Mui-checked': {
                        transform: 'translateX(23px)',
                        color: '#FFFFFF',
                        '& + .MuiSwitch-track': {
                            backgroundColor: '#C4C4C4',
                            border: '1px solid #C4C4C4',
                            opacity: 1,
                        },
                        '&.Mui-disabled + .MuiSwitch-track': {
                            backgroundColor: '#ECECEC',
                            border: '1px solid #ECECEC',
                        },
                        '&.Mui-disabled + .MuiSwitch-thumb': {
                            color: '#FFFFFF',
                            border: '1px solid #ECECEC',
                        },
                    },
                    '&.Mui-focusVisible .MuiSwitch-thumb': {
                        border: '2px solid #525050',
                    },
                    '&.Mui-disabled .MuiSwitch-thumb': {
                        color: '#FFFFFF',
                        border: '1px solid #ECECEC',
                    },
                    '&.Mui-disabled + .MuiSwitch-track': {
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #ECECEC',
                        opacity: 1,
                    },
                },
                '& .MuiSwitch-thumb': {
                    boxSizing: 'border-box',
                    width: 24,
                    height: 24,
                    border: '1px solid #C4C4C4',
                    boxShadow: 'none',
                },
                '& .MuiSwitch-track': {
                    borderRadius: '12px',
                    backgroundColor: '#FFF',
                    border: '1px solid #C4C4C4',
                    opacity: 1,
                    transition: 'background-color 0.3s',
                },
                '&:hover .MuiSwitch-thumb': {
                    border: '1px solid #525050',
                },
            },
        },
    ],
}
