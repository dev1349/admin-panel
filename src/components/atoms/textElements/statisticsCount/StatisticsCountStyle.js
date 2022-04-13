export default {
    styleOverrides: {
        root: {
            color: 'white',
            backgroundColor: 'green',
            fontSize: '12px',
            padding: '0 5px',
            borderRadius: '10px',
            marginLeft: '20px',
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
