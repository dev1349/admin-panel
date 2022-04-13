export default {
    styleOverrides: {
        root: {
            color: 'orange',
            fontSize: '14px',
        },
    },
    variants: [
        {
            props: { oldPrice: true },
            style: {
                color: 'inherit',
                textDecoration: 'line-through',
            },
        },
    ],
}
