export default {
    styleOverrides: {
        root: {
            padding: '5px 0',
            border: 'none',
            display: 'block',
            '@media (min-width: 600px)': {
                display: 'flex',
                alignItems: 'center',
            },
        },
    },
    variants: [
        {
            props: { fixedWidthWithMarginRight: true },
            style: {
                width: '100%',
                '@media (min-width: 1500px)': {
                    width: '18%',
                    marginRight: '20px',
                },
            },
        },
    ],
}
