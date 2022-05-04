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
                '& .MuiInputBase-input::-webkit-calendar-picker-indicator':
                    {
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
