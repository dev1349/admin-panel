export default {
    styleOverrides: {
        root: {},
    },
    variants: [
        {
            props: { verticalLabelInput: true },
            style: {
                display: 'block',
                marginTop: '17px',
                '&:first-of-type': {
                    marginTop: '7px',
                },
                '& .MuiInputLabel-root': {
                    display: 'block',
                    position: 'static',
                    left: 'unset',
                    top: 'unset',
                    maxWidth: 'unset',
                    transform: 'unset',
                    transformOrigin: 'unset',
                    overflow: 'unset',
                    textOverflow: 'unset',
                    transition: 'unset',
                    fontSize: '16px',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    lineHeight: 1,
                    color: '#525050',
                    '&.Mui-focused': {
                        color: '#525050',
                    },
                },
                '& .MuiSelect-select.MuiSelect-outlined': {
                    padding: '7px 10px',
                },
                '& .MuiOutlinedInput-root': {
                    marginTop: '7px',
                    display: 'block',
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
                '& .MuiOutlinedInput-input': {
                    height: 'unset',
                    boxSizing: 'border-box',
                    padding: '7px 10px',
                    fontSize: '16px',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    color: '#525050',
                },
                '& .MuiSelect-nativeInput': {
                    padding: '7px 10px',
                    fontSize: '16px',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    color: '#373737',
                },
                '& legend': {
                    display: 'none',
                },
                '& fieldset': {
                    marginTop: '5px',
                },
            },
        },
    ],
}
