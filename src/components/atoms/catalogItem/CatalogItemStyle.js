export default {
    styleOverrides: {
        root: {
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '12px',
            lineHeight: '19px',
            fontWeight: 400,
            fontStyle: 'normal',
            wordWrap: 'break-word',
        },
    },
    variants: [
        {
            props: { darkCatalogItem: true },
            style: {
                color: '#525050',
                fontWeight: 800,
                fontSize: '12px',
            },
        },
        {
            props: { hoveredCatalogItem: true },
            style: {
                textDecoration: 'underline',
            },
        },
    ],
}
