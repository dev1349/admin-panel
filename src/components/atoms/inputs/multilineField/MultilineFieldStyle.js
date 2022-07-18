export default {
    styleOverrides: {
        root: {
            color: '#525050',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: 1,
            '& .MuiInputBase-multiline': {
                padding: '0px',
            },
            '& .MuiInputBase-inputMultiline': {
                padding: `7px 10px`,
            },
            '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                    borderColor: '#525050',
                },
                '& fieldset': {
                    borderColor: '#C4C4C4',
                },
                '&:hover fieldset': {
                    borderColor: '#525050',
                },
            },
            '& .MuiFormHelperText-root': {
                color: '#C4C4C4',
                fontWeight: 400,
                marginLeft: 0,
                fontSize: '12px',
            },
        },
    },
}
