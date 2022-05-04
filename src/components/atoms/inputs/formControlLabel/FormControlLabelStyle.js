export default {
    styleOverrides: {
        root: {},
    },
    variants: [
        {
            props: { smallFontSize: true },
            style: {
                '& .MuiTypography-root': {
                    fontSize: '14px',
                },
                marginLeft: '-6px',
            },
        },
    ],
}
