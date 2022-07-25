export default {
    styleOverrides: {
        root: {},
    },
    variants: [
        {
            props: { dialogPagination: true },
            style: {
                display: 'flex',
                justifyContent: 'center',
                '& .MuiTouchRipple-root': {
                    display: 'none',
                },
                '& .MuiPaginationItem-root': {
                    borderRadius: 0,
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: 1,
                    padding: '11px',
                    margin: 0,
                    height: 'auto',
                    color: '#525050',
                    '&:hover': {
                        backgroundColor: '#C4C4C4',
                    },
                },
                '& .MuiPaginationItem-root.Mui-selected': {
                    backgroundColor: '#C4C4C4',
                    '&:hover': {
                        backgroundColor: '#C4C4C4',
                    },
                },
            },
        },
    ],
}
