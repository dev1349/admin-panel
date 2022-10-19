export default {
    styleOverrides: {
        root: {},
    },
    variants: [
        {
            props: { catalogFirstLevelList: true },
            style: {
                display: 'block',
                paddingInlineStart: 0,
                marginBlockStart: 0,
                marginBlockEnd: 0,
                marginInlineStart: 0,
                marginInlineEnd: 0,
                padding: '50px 34px',
                boxSizing: 'content-box',
            },
        },
        {
            props: { catalogSubLevelList: true },
            style: {
                paddingInlineStart: 0,
                marginBlockStart: 0,
                marginBlockEnd: 0,
                marginInlineStart: 0,
                marginInlineEnd: 0,
                padding: '50px 34px',
                boxSizing: 'content-box',
                display: 'block',
                columnFill: 'balance',
                verticalAlign: 'top',
            },
        },
        {
            props: { catalogSubSubLevelList: true },
            style: {
                display: 'block',
                paddingInlineStart: 0,
                marginBlockStart: 0,
                marginBlockEnd: 0,
                marginInlineStart: 0,
                marginInlineEnd: 0,
                marginBottom: '15px',
            },
        },
    ],
}
