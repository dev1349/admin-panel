export default {
    styleOverrides: {
        root: {
            border: 'none',
            display: 'block',
            lineHeight: 1,
            gap: '10px',
            marginTop: '10px',
            '@media (min-width: 600px)': {
                display: 'flex',
                marginTop: '7px',
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
        {
            props: { alignItemsCenter: true },
            style: {
                alignItems: 'center',
            },
        },
    ],
}
