export default {
    styleOverrides: {
        root: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            backgroundColor: '#FFF',
        },
    },
    variants: [
        {
            props: { flexContent: true },
            style: {
                width: 'auto',
            },
        },
    ],
}
