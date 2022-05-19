export default {
    styleOverrides: {
        root: {},
    },
    variants: [
        {
            props: { dialogSortLabel: true },
            style: {
                '&.Mui-active': {
                    color: '#525050',
                    '& .MuiTableSortLabel-icon': {
                        color: '#525050',
                    },
                },
            },
        },
    ],
}
