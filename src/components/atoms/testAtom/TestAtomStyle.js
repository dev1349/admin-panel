export default {
    styleOverrides: {
        root: {
            width: '100px',
            height: '100px',
            backgroundColor: 'red',
        }
    },
    variants: [
        {
            props: { blue: true },
            style: {
                backgroundColor: 'blue',
            },
        },
        {
            props: { green: true },
            style: {
                backgroundColor: 'green',
            },
        },
        {
            props: { big: true },
            style: {
                width: '200px',
                height: '200px',
            },
        },
    ],
}
