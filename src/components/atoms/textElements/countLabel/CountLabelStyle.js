export default {
    styleOverrides: {
        root: {
            backgroundColor: 'green',
            margin: 0,
            padding: '5px',
            borderRadius: '3px',
        },
    },
    variants: [
        {
            props: { attention: true },
            style: {
                backgroundColor: 'orange',
            },
        },
    ],
}
