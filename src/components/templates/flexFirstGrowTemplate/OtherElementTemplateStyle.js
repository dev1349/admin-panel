export default {
    styleOverrides: {
        root: {
            marginLeft: '10px',
        },
    },
    variants: [
        {
            props: { noMargin: true },
            style: {
                margin: '0',
            },
        },
    ],
}
