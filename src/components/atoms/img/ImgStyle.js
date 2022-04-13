export default {
    styleOverrides: {
        root: {
            maxWidth: '100%',
        },
    },
    variants: [
        {
            props: { logo: true },
            style: {
                height: '24px',
            },
        },
        {
            props: { block: true },
            style: {
                display: 'block',
            },
        },
    ],
}
