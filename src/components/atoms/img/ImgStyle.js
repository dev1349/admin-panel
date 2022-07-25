export default {
    styleOverrides: {
        root: {
            maxWidth: '100%',
        },
    },
    variants: [
        {
            props: { logo: true },
            style: {
                height: '24px',
            },
        },
        {
            props: { block: true },
            style: {
                display: 'block',
            },
        },
        {
            props: { imageInImageList: true },
            style: {
                display: 'block',
                position: 'absolute',
                top: '0px',
                left: '0px',
                height: '100%',
                width: '100%',
                objectFit: 'contain',
            },
        },
        {
            props: { imageInGoodList: true },
            style: {
                display: 'block',
                position: 'absolute',
                top: '0px',
                left: '0px',
                height: '100%',
                width: '100%',
                objectFit: 'contain',
            },
        },
    ],
}
