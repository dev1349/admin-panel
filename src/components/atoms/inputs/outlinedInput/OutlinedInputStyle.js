export default {
    styleOverrides: {
        root: {},
    },
    variants: [
        {
            props: { block: true },
            style: {
                display: 'block',
            },
        },
        {
            props: { dialogInput: true },
            style: {
                color: '#525050',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: 1,
                backgroundColor: '#FFFFFF',
                '& .MuiOutlinedInput-input': {
                    padding: `7px 10px`,
                },
                '& .MuiOutlinedInput-notchedOutline': {
                    border: '1px solid #c4c4c4',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    border: '1px solid #525050',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    border: '2px solid #525050',
                },
            },
        },
    ],
}
