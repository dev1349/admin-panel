export default {
    styleOverrides: {
        root: {
            border: '1px solid lightgrey',
        },
    },
    variants: [
        {
            props: { default: true },
            style: {
                height: '45px',
            },
        },
        {
            props: { defaultHeading: true },
            style: {
                height: '45px',
                backgroundColor: 'lightgrey',
            },
        },
    ],
}
