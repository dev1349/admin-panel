export default {
    styleOverrides: {
        root: {},
    },
    variants: [
        {
            props: { dialogLink: true },
            style: {
                textDecoration: 'none',
                '&:hover': {
                    textDecoration: 'none',
                    color: 'inherit',
                },
            },
        },
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
