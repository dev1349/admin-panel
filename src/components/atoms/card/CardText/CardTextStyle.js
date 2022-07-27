export default {
    styleOverrides: {
        root: {
            h3: {
                fontWeight: 300,
                fontSize: '32px',
                textAlign: 'right',
            },
        },
    },
    variants: [
        {
            props: { stock: true },
            style: {
                h3: {
                    fontSize: '20px',
                },

                time: {
                    fontFamily: 'Roboto Slab',
                    fontWeight: 300,
                    fontSize: '32px',
                    color: '#082E66',
                },
            },
        },
    ],
}
