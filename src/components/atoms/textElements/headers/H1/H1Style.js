export default {
    styleOverrides: {
        root: {
            fontSize: '22px',
            color: 'rgba(0, 0, 0, 0.87)',
            display: 'block',
            fontWeight: '400',
        },
    },
    variants: [
        {
            props: { fs: true },
            style: {
                fontSize: '32px',
            },
        },
        {
            props: { dialogH1: true },
            style: {
                fontSize: '20px',
                fontWeight: '700',
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
            props: { megaMenuHeader: true },
            style: {
                color: '#7fe376',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: 1,
            },
        },
    ],
}
