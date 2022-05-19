export default {
    styleOverrides: {
        root: {
            padding: '0 5px',
        },
    },
    variants: [
        {
            props: { headCell: true },
            style: {
                whiteSpace: 'nowrap',
            },
        },
        {
            props: { dialogCell: true },
            style: {
                fontSize: '16px',
                fontWeight: 400,
                color: '#525050',
                borderBottom: 'none',
            },
        },
        {
            props: { dialogHeadCell: true },
            style: {
                fontSize: '16px',
                fontWeight: 700,
                color: '#525050',
                borderBottom: 'none',
            },
        },
        {
            props: { dialogButtonCell: true },
            style: {
                width: '45px',
            },
        },
    ],
}
