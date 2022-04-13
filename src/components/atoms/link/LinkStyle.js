export default {
    styleOverrides: {
        root: {},
    },
    variants: [
        {
            props: { hoverUnderline: true },
            style: {
                '&:hover': {
                    textDecoration: 'underline',
                },
            },
        },
    ],
}
