export default {
    styleOverrides: {
        root: {},
    },
    variants: [
        {
            props: { labelInputContainer: true },
            style: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                '& > label': {
                    width: '40%',
                },
                '& > div': {
                    marginLeft: '10px',
                    width: 'calc(60% - 10px)',
                },
            },
        },
        {
            props: { labelHideShowInputContainer: true },
            style: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                '& > label': {
                    width: '40%',
                },
                '& > div': {
                    marginLeft: '10px',
                    width: 'calc(60% - 10px)',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    flexWrap: 'nowrap',
                    '& > button': {
                        marginLeft: '5px',
                    },
                },
            },
        },

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
        {
            props: { labelSwitchContainer: true },
            style: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                '& > label': {
                    width: '40%',
                },
                '& > div': {
                    marginLeft: '10px',
                    width: 'calc(60% - 10px)',
                },
            },
        },
        {
            props: { labelSwitchTooltipContainer: true },
            style: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                '& > div:first-of-type': {
                    marginLeft: 0,
                    width: '40%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    gap: '5px',
                },
                '& > div': {
                    marginLeft: '10px',
                },
            },
        },
    ],
}
