export default {
    styleOverrides: {
        root: {},
    },
    variants: [
        {
            props: { dialogTablePagination: true },
            style: {
                fontSize: '16px',
                color: '#525050',
                fontWeight: 400,
                '& .Mui-focused .MuiTablePagination-select': {
                    backgroundColor: '#F2EFEF',
                },
                '& .MuiTablePagination-selectLabel': {
                    fontSize: '16px',
                    color: '#525050',
                    fontWeight: 400,
                },
                '& .MuiInputBase-root': {
                    fontSize: '16px',
                    color: '#525050',
                    fontWeight: 400,
                },
                '& .MuiSelect-icon': {
                    color: '#525050',
                },
                '& .MuiTablePagination-displayedRows': {
                    fontSize: '16px',
                    color: '#525050',
                    fontWeight: 400,
                },
                '& .MuiIconButton-root': {
                    color: '#525050',
                    padding: '5px',
                },
                '& .MuiIconButton-root.Mui-disabled': {
                    color: '#9C9C9C',
                },
                '& .MuiIconButton-root:hover': {
                    backgroundColor: '#FFF',
                },
                '& .MuiButtonBase-root:active': {
                    backgroundColor: '#F2EFEF',
                },
                '& .MuiButtonBase-root.Mui-focusVisible': {
                    border: '2px solid #525050',
                    boxSizing: 'border-box',
                    padding: '3px',
                },
            },
        },
    ],
}
