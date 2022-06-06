export default {
    styleOverrides: {
        root: {
            '& .MuiAutocomplete-inputRoot': {
                padding: '0',
            },
        },
        variants: [
            {
                props: { city: true },
                style: {
                    width: '40%',
                    height: '300px',
                },
            },
            {
                props: { office: true },
                style: {
                    width: '40%',
                    height: '300px',
                    marginLeft: '10%',
                },
            },
        ],
    },
}
