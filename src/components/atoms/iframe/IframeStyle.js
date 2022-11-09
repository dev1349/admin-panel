export default {
    styleOverrides: {
        root: {},
    },
    variants: [
        {
            props: { response: true },
            style: {
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
            },
        },
    ],
}
