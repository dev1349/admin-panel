export default {
    styleOverrides: {
        root: {
            padding: '0',
            margin: '0',
        },
    },
    variants: [
        {
            props: { withoutExpandIcon: true },
            style: {
                paddingLeft: '25px',
            },
        },
        {
            props: { activeItem: true },
            style: {
                '& .MuiTypography-root': {
                    fontWeight: 'bold',
                },
            },
        },
    ],
}
