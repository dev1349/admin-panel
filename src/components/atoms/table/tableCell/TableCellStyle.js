export default {
    styleOverrides: {
        root: {
            padding: '0 4px',
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
                lineHeight: 1,
                padding: '4px',
            },
        },
        {
            props: { dialogHeadCell: true },
            style: {
                lineHeight: 1,
                fontSize: '16px',
                fontWeight: 700,
                color: '#525050',
                borderBottom: 'none',
                paddingTop: '5px',
                paddingBottom: '4px',
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
