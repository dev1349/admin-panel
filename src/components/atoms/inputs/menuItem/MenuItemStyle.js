export default {
    styleOverrides: {
        root: {},
    },
    variants: [
        {
            props: { forTable: true },
            style: {
                fontSize: '14px',
            },
        },
        {
            props: { dialogMenuItem: true },
            style: {
                fontSize: '16px',
                fontWeight: 400,
                color: '#525050',
                '&:hover': {
                    backgroundColor: '#C4C4C4',
                },
                '&:active': {
                    backgroundColor: '#C4C4C4',
                },
                '&.Mui-selected:focus-visible': {
                    backgroundColor: '#C4C4C4',
                },
                '&.Mui-selected': {
                    backgroundColor: '#F2EFEF',
                },
                '&.Mui-selected:hover': {
                    backgroundColor: '#C4C4C4',
                },
                '&:focus-visible': {
                    backgroundColor: '#C4C4C4',
                },
            },
        },
    ],
}
