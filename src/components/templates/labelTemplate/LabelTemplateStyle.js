export default {
    styleOverrides: {
        root: {
            display: 'block',
            width: '100%',

            '@media (min-width: 600px)': {
                marginTop: '10px',
                width: '35%',
                textAlign: 'right',
            },
        },
    },
    variants: [
        {
            props: { alignLeft: true },
            style: {
                textAlign: 'left',
                width: '100%',
                '@media (min-width: 1500px)': {
                    width: '60%',
                    textAlign: 'left',
                },
            },
        },
        {
            props: { alignLeftFixedWidth: true },
            style: {
                '@media (min-width: 600px)': {
                    textAlign: 'left',
                    width: '20%',
                },
            },
        },
        {
            props: { noMarginTop: true },
            style: {
                '@media (min-width: 600px)': {
                    marginTop: 0,
                },
            },
        },
    ],
}
