export default {
    styleOverrides: {
        root: {},
    },
    variants: [
        {
            props: { menuButton: true },
            style: {
                zIndex: 1310,
            },
        },
        {
            props: { dialogButton: true },
            style: {
                padding: '5px',
                backgroundColor: '#F2EFEF',
                '& .MuiSvgIcon-root': {
                    height: '24px',
                    width: '24px',
                    fill: '#525050',
                },
                '&.MuiButtonBase-root:hover': {
                    backgroundColor: '#FFFFFF',
                },
                '&.MuiButtonBase-root.Mui-disabled .MuiSvgIcon-root': {
                    fill: '#9C9C9C',
                },
                '&.MuiButtonBase-root:active': {
                    backgroundColor: '#F2EFEF',
                },
                '&.MuiButtonBase-root.Mui-focusVisible': {
                    boxShadow: '0px 0px 0px 2px #525050',
                },
            },
        },
    ],
}
