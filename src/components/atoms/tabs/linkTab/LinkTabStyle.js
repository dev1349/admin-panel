export default {
    styleOverrides: {
        root: {},
    },
    variants: [
        {
            props: { dialogTab: true },
            style: {
                color: '#525050',
                fontWeight: 400,
                fontSize: '16px',
                textTransform: 'capitalize',
                padding: '10px 10px 10px 10px',
                minHeight: 'unset',
                '&.Mui-selected': {
                    backgroundColor: '#c4c4c4',
                    color: '#525050',
                },
            },
        },
    ],
}
