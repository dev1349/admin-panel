export default {
    styleOverrides: {
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
    },
    variants: [
        {
            props: {alignItemsCenter: true},
            style: {
                alignItems: 'center',
            },
        },
    ],
}
