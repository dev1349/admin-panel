export default {
    styleOverrides: {
        root: {},
    },
    variants: [
        {
            props: { dialogToggleButton: true },
            style: {
                fontSize: '16px',
                lineHeight: 1,
                fontWeight: 400,
                color: '#525050',
                padding: '10px',
                border: '1px solid #C4C4C4',
                borderRadius: 0,
                '&:hover': {
                    backgroundColor: '#C4C4C4',
                },
                '&.Mui-selected': {
                    backgroundColor: '#C4C4C4',
                    '&:hover': {
                        backgroundColor: '#C4C4C4',
                    },
                },
                '&.Mui-disabled.Mui-selected': {
                    opacity: '0.38',
                },
            },
        },
    ],
}
