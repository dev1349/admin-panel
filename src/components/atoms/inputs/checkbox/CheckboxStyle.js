export default {
    styleOverrides: {
        root: {},
    },
    variants: [
        {
            props: { forTable: true },
            style: {
                padding: '5px',
            },
        },
        {
            props: { dialogCheckbox: true },
            style: {
                padding: '5px',
                color: '#525050',
                '&.Mui-checked': {
                    color: '#525050',
                },
                '&.MuiCheckbox-indeterminate': {
                    color: '#525050',
                },
                '&.Mui-focusVisible .MuiSvgIcon-root': {
                    outline: '2px solid #525050',
                    outlineOffset: '-2px',
                    borderRadius: '4px',
                },
            },
        },
    ],
}
