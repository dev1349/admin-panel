export default {
    styleOverrides: {
        root: {
            boxSizing: 'border-box',
            border: '1px solid lightgrey',
        },
    },
    variants: [
        {
            props: { topBottomMargin: true },
            style: {
                marginTop: '10px',
                marginBottom: '10px',
            },
        },
        {
            props: { withPadding: true },
            style: {
                paddingLeft: '10px',
                paddingRight: '10px',
                paddingTop: '5px',
                paddingBottom: '5px',
            },
        },
    ],
}
