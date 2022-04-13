export default {
    styleOverrides: {
        root: {
            display: 'flex',
            padding: '10px 0 10px 0',
        },
    },
    variants: [
        {
            props: { noPadding: true },
            style: {
                padding: '0',
            },
        },
        {
            props: { alignItemsCenter: true },
            style: {
                alignItems: 'center',
            },
        },
    ],
}
