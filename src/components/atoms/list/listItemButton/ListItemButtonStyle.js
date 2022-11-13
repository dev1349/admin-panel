export default {
    styleOverrides: {
        root: {},
    },
    variants: [
        {
            props: { sub: true },
            style: {
                paddingLeft: '60px',
            },
        },
        {
            props: { dialogItemButton: true },
            style: {
                flexGrow: 0,
                padding: 0,
            },
        },
        {
            props: { adminListItemButton: true },
            style: {
                paddingLeft: '8px',
                paddingRight: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexGrow: 1,
                color: '#525050',
                gap: '8px',
                '&:hover': {
                    backgroundColor: '#FFF',
                },
            },
        },
        {
            props: { adminActiveListItemButton: true },
            style: {
                backgroundColor: '#FFF',
            },
        },
    ],
}
