export default {
    styleOverrides: {
        root: {},
    },
    variants: [
        {
            props: { catalogItem: true },
            style: {
                margin: 0,
                display: 'block',
            },
        },
        {
            props: { catalogSubItem: true },
            style: {
                padding: 0,
                display: 'inline-block',
                breakInside: 'avoid-column',
                width: '100%',
            },
        },
        {
            props: { catalogSubSubItem: true },
            style: {
                padding: 0,
                display: 'block',
                listStyleType: 'none',
            },
        },
    ],
}
