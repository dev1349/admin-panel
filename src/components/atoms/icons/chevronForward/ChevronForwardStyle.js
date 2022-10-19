export default {
    styleOverrides: {
        root: {
            width: '10px',
            height: '16px',
            flexShrink: 0,
        },
    },
    variants: [
        {
            props: { light: true },
            style: {
                fill: '#525050',
            },
        },
        {
            props: { catalogItem: true },
            style: {
                width: '5.62px',
                height: '9.84px',
            },
        },
    ],
}
