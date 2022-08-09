export default {
    styleOverrides: {
        root: {
            backgroundColor: 'lightgrey',
            border: '1px solid lightgrey',
        },
    },
    variants: [
        {
            props: { dialogTableHead: true },
            style: {
                backgroundColor: '#C4C4C4',
                border: 'none',
                position: 'sticky',
                top: '51px',
                zIndex: 1000,
            },
        },
    ],
}
