export default {
    styleOverrides: {
        root: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '5px',

            h3: {
                color: '#4f70a0',
                fontSize: '14px',
                fontWeight: 500,
            },

            span: {
                fontSize: '10px',
                fontWeight: 500,
            },
        },
    },
    variants: [
        {
            props: { positiveProgress: true },
            style: {
                span: {
                    color: '#085F20',
                },
            },
        },
        {
            props: { neutralProgress: true },
            style: {
                span: {
                    color: 'black',
                },
            },
        },
        {
            props: { negativeProgress: true },
            style: {
                span: {
                    color: '#FF1010',
                },
            },
        },
    ],
}
