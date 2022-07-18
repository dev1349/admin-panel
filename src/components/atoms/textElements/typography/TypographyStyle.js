export default {
    styleOverrides: {
        root: {},
    },
    variants: [
        {
            props: { smallFontSize: true },
            style: {
                fontSize: '14px',
            },
        },
        {
            props: { mainAdminText: true },
            style: {
                fontSize: '16px',
                fontWeight: 400,
                color: '#525050',
                lineHeight: 1,
            },
        },
        {
            props: { textAlignCenter: true },
            style: {
                textAlign: 'center',
            },
        },
        {
            props: { bold: true },
            style: {
                fontWeight: 800,
            },
        },
        {
            props: { lineHeight15: true },
            style: {
                lineHeight: 1.5,
            },
        },
        {
            props: { characteristicSetTitle: true },
            style: {
                fontSize: '16px',
                fontWeight: 400,
                color: '#525050',
                lineHeight: 1,
            },
        },
        {
            props: { characteristicGroupTitle: true },
            style: {
                fontSize: '16px',
                fontWeight: 400,
                color: '#525050',
                lineHeight: 1,
            },
        },
    ],
}
