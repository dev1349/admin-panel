export default {
    styleOverrides: {
        root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid lightgrey',
            borderRadius: '5px',
            height: '150px',
            overflow: 'hidden',
        },
    },
    variants: [
        {
            props: { noSizes: true },
            style: {
                width: 'auto',
                height: 'auto',
            },
        },
        {
            props: { noBorder: true },
            style: {
                border: 'none',
            },
        },
    ],
}
