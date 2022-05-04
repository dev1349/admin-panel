export default {
    styleOverrides: {
        root: {
            paddingRight: '5px',
        },
    },
    variants: [
        {
            props: { lastChild: true },
            style: {
                paddingRight: '0',
            },
        },
    ],
}
