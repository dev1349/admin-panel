export default {
    styleOverrides: {
        root: {},
    },
    variants: [
        {
            props: { dialogIcon: true },
            style: {
                height: '24px',
                width: '24px',
                fill: '#525050',
            },
        },
        {
            props: { checkedIcon: true },
            style: {
                height: '24px',
                width: '24px',
                fill: '#FFF',
            },
        },
    ],
}
