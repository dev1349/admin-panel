export default {
    styleOverrides: {
        root: {
            color: '#525050',
            fontSize: '16px',
            fontWeight: 400,
            '& .MuiInputBase-input': {
                padding: `7px 10px`,
            },
            '&.MuiOutlinedInput-root.MuiInputBase-root.Mui-focused': {
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#525050',
                },
            },
            '&.MuiOutlinedInput-root.MuiInputBase-root': {
                '&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#C4C4C4',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#525050',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'C4C4C4',
                },
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
