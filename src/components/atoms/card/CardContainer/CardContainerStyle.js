export default {
    styleOverrides: {
        root: {
            fontFamily: 'Roboto Slab',
            width: '272px',
            maxHeight: '155px',
            borderRadius: '16px',
            background: 'rgba(191, 244, 255, 0.81)',
            padding: '11px',
            userSelect: 'none',
            cursor: 'pointer',
            transition: 'all .5s',

            '@keyframes cardMove': {
                '0%': {
                    opacity: 0,
                    transform: 'translateX(-60px)',
                },

                '100%': {
                    opacity: 1,
                    transform: 'translateX(0)',
                },
            },
            animation: 'cardMove 1s ease-out',

            '&:hover': {
                transform: 'translateY(-3px) translateX(5px) scaleX(1.02) scaleY(1.02)',
                boxShadow: '0px 10px 10px 0px rgba(0, 0, 0, 0.5)',
                svg: {
                    transition: 'transform 1s',
                    transform: 'scaleX(1.05) scaleY(1.05)',
                },
            },

            '&:active': {
                transform: 'translateY(-3px)',
                boxShadow: '0 10px 20px rgba(0, 0, 0, .2)',
            },
        },
    },
}
