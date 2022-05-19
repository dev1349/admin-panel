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
            },
        },
        {
            props: { textAlignCenter: true },
            style: {
                textAlign: 'center',
            },
        },
    ],
}
