export default {
    styleOverrides: {
        root: {
            color: '#525050',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: 1,
            '& .MuiInputBase-input': {
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
    variants: [
        {
            props: { forTable: true },
            style: {
                '& .MuiInputBase-input': {
                    fontSize: '14px',
                },
            },
        },
        {
            props: { forFilter: true },
            style: {
                '& .MuiInputBase-input': {
                    fontSize: '14px',
                    padding: '5px',
                },
                width: '70px',
                verticalAlign: 'middle',
            },
        },
        {
            props: { dateForFilter: true },
            style: {
                '& .MuiInputBase-input': {
                    fontSize: '14px',
                    padding: '5px',
                },
                width: '120px',
                verticalAlign: 'middle',
                '& .MuiInputBase-input::-webkit-calendar-picker-indicator': {
                    marginLeft: '-15px',
                },
            },
        },
        {
            props: { clientSearch: true },
            style: {
                '& .MuiInputBase-input': {
                    fontSize: '14px',
                    padding: '5px',
                },
                width: '250px',
                verticalAlign: 'middle',
            },
        },
    ],
}
