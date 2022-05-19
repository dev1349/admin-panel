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
    ],
}
