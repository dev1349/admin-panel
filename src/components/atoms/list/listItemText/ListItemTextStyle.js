export default {
    styleOverrides: {
        root: {
            padding: '0',
            margin: '0',
        },
    },
    variants: [
        {
            props: { dialogItem: true },
            style: {
                paddingTop: '5px',
                paddingBottom: '5px',
                fontSize: '16px',
                color: '#525050',
            },
        },
    ],
}
