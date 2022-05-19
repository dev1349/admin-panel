export default {
    styleOverrides: {
        root: {},
    },
    variants: [
        {
            props: { dialogButton: true },
            style: {
                boxShadow: 'none',
                textTransform: 'none',
                fontSize: 16,
                backgroundColor: '#C4C4C4',
                color: '#525050',
                fontWeight: 400,
                padding: '13px 15px',
                lineHeight: 1,
                '&:hover': {
                    backgroundColor: '#F2EFEF',
                },
                '&:active': {
                    backgroundColor: '#C4C4C4',
                },
                '&:focus-visible': {
                    boxShadow: '0px 0px 0px 2px #525050',
                    backgroundColor: '#F2EFEF',
                },
            },
        },
    ],
}
