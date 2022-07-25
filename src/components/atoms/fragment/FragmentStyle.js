export default {
    styleOverrides: {
        root: {},
    },
    variants: [
        {
            props: { requiredFieldStar: true },
            style: {
                color: 'red',
                fontWeight: 800,
            },
        },
        {
            props: { goodPriceWithDiscount: true },
            style: {
                color: 'red',
                textDecorationLine: 'line-through',
            },
        },
        {
            props: { noWrap: true },
            style: {
                whiteSpace: 'nowrap',
            },
        },
        {
            props: { discountPrice: true },
            style: {
                color: 'green',
            },
        },
        {
            props: { fewGoods: true },
            style: {
                display: 'inline-block',
                padding: '4px',
                lineHeight: 1,
                borderRadius: '4px',
                backgroundColor: 'limegreen',
                color: 'white',
            },
        },
        {
            props: { manyGoods: true },
            style: {
                display: 'inline-block',
                padding: '4px',
                lineHeight: 1,
                borderRadius: '4px',
                backgroundColor: 'green',
                color: 'white',
            },
        },
        {
            props: { inStock: true },
            style: {
                display: 'inline-block',
                backgroundColor: 'green',
                color: '#FFF',
                padding: '4px',
                borderRadius: '4px',
                whiteSpace: 'nowrap',
                lineHeight: 1,
            },
        },
        {
            props: { notInStock: true },
            style: {
                display: 'inline-block',
                backgroundColor: 'black',
                color: '#FFF',
                padding: '4px',
                borderRadius: '4px',
                whiteSpace: 'nowrap',
                lineHeight: 1,
            },
        },
        {
            props: { underTheOrder: true },
            style: {
                display: 'inline-block',
                backgroundColor: 'red',
                color: '#FFF',
                padding: '4px',
                borderRadius: '4px',
                whiteSpace: 'nowrap',
                lineHeight: 1,
            },
        },
        {
            props: { deliveryIsExpected: true },
            style: {
                display: 'inline-block',
                backgroundColor: 'orange',
                color: '#FFF',
                padding: '4px',
                borderRadius: '4px',
                whiteSpace: 'nowrap',
                lineHeight: 1,
            },
        },
        {
            props: { isRunningOut: true },
            style: {
                display: 'inline-block',
                backgroundColor: 'limegreen',
                color: '#FFF',
                padding: '4px',
                borderRadius: '4px',
                whiteSpace: 'nowrap',
                lineHeight: 1,
            },
        },
    ],
}
