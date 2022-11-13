export default {
    styleOverrides: {
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
    },
    variants: [
        {
            props: { alignItemsCenter: true },
            style: {
                alignItems: 'center',
            },
        },
        {
            props: { justifyContentCenter: true },
            style: {
                justifyContent: 'center',
            },
        },
        {
            props: { spaceBetween: true },
            style: {
                justifyContent: 'space-between',
            },
        },
        {
            props: { gap10: true },
            style: {
                gap: '10px',
            },
        },
        {
            props: { gap7: true },
            style: {
                gap: '7px',
            },
        },
        {
            props: { marginLeft24: true },
            style: {
                marginLeft: '24px',
            },
        },
        {
            props: { justifyContentRight: true },
            style: {
                justifyContent: 'flex-end',
            },
        },
        {
            props: { noWrap: true },
            style: {
                flexWrap: 'nowrap',
            },
        },
        {
            props: { justifyContentLeftSm: true },
            style: {
                justifyContent: 'flex-start',
                '@media (min-width: 600px)': {
                    justifyContent: 'flex-end',
                },
            },
        },
        {
            props: { directionColumn: true },
            style: {
                flexDirection: 'column',
            },
        },
        {
            props: { paddingTop7: true },
            style: {
                paddingTop: '7px',
            },
        },
    ],
}
