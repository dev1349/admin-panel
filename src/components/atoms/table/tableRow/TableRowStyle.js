export default {
    styleOverrides: {
        root: {
            border: '1px solid lightgrey',
        },
    },
    variants: [
        {
            props: { default: true },
            style: {
                height: '45px',
            },
        },
        {
            props: { defaultHeading: true },
            style: {
                height: '45px',
                backgroundColor: 'lightgrey',
            },
        },
        {
            props: { dialogRow: true },
            style: {
                border: 'none',
                borderBottom: '1px solid #C4C4C4',
                '.MuiTableBody-root &:hover': {
                    backgroundColor: '#C4C4C4',
                },
            },
        },
        {
            props: { dialogSelectedRow: true },
            style: {
                backgroundColor: '#F2EFEF',
            },
        },
    ],
}
