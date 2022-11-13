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
        {
            props: { adminNavRouterLink: true },
            style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexGrow: 1,
                gap: '8px',
            },
        },
    ],
}
