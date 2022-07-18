export default {
    styleOverrides: {
        root: {},
    },
    variants: [
        {
            props: { dialogTabs: true },
            style: {
                borderBottom: '1px solid #c4c4c4',
                minHeight: 'unset',
                '& .MuiTabs-indicator': {
                    backgroundColor: '#525050',
                    bottom: 0,
                    display: 'none',
                },
                '& .MuiTouchRipple-root': {
                    display: 'none',
                },
                '& .MuiTabs-scrollButtons.Mui-disabled': {
                    opacity: 0.3,
                },
            },
        },
    ],
}
