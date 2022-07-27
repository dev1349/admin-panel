export default {
    styleOverrides: {
        root: {
            display: 'flex',
            animation: 'movContainer 1.5s ease-out',

            '@keyframes movContainer': {
                '80%': {
                    transform: 'translateY(-10px) translateX(20px) rotate(1deg)',
                },

                '100%': {
                    transform: 'translate(0) rotate(0)',
                },
            },
        },
    },
}
