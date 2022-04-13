export default {
    styleOverrides: {
        root: {
            '& .MuiInputBase-input': {
                padding: `7px 10px`,
            },
        },
    },
    variants: [
        {
            props: { forTable: true },
            style: {
                fontSize: '14px',
            },
        },
    ],
}
