export default {
    styleOverrides: {
        root: {
            color: '#525050',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: 1,
        },
    },
    variants: [
        {
            props: { dialogLabel: true },
            style: {
                position: 'static',
                transform: 'unset',
                textAlign: 'right',
                // '&.Mui-focused': {
                //     color: '#1976d2',
                // },
            },
        },
    ],
}
