export default {
    styleOverrides: {
        root: {},
    },
    variants: [
        {
            props: { tabsContainer: true },
            style: {
                marginTop: '7px',
            },
        },
        {
            props: { tabPanelContent: true },
            style: {
                paddingTop: '10px',
            },
        },
        {
            props: { imageListBorder: true },
            style: {
                border: '1px solid #c4c4c4',
                borderRadius: '4px',
            },
        },
        {
            props: { imageListItems: true },
            style: {
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                padding: '3.5px',
                flexWrap: 'wrap',
            },
        },
        {
            props: { imageListItem: true },
            style: {
                width: '50%',
                padding: '3.5px',
                '@media (min-width: 768px)': {
                    width: '33.33%',
                },
                '@media (min-width: 992px)': {
                    width: '25%',
                },
            },
        },
        {
            props: { imageInImageListContainer: true },
            style: {
                position: 'relative',
                width: '100%',
                paddingTop: '100%',
                content: "''",
                border: '1px solid #c4c4c4',
            },
        },
        {
            props: { uploadImageButtonToImageListContainer: true },
            style: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            },
        },
        {
            props: { deleteButtonContainerInImageList: true },
            style: {
                position: 'absolute',
                bottom: 0,
                right: 0,
                transform: 'translate(-7px, -7px)',
            },
        },
        {
            props: { checkIconContainerInImageList: true },
            style: {
                position: 'absolute',
                top: 0,
                left: 0,
                transform: 'translate(7px, 7px)',
                height: '34px',
                width: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
            },
        },
        {
            props: { checkedImageContainerInImageList: true },
            style: {
                backgroundColor: 'green',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
        },
        {
            props: { characteristicSetPaddingTop: true },
            style: {
                paddingTop: '8px',
                position: 'relative',
                marginTop: '7px',
            },
        },
        {
            props: { characteristicSetTitle: true },
            style: {
                position: 'absolute',
                top: 0,
                left: '12px',
                padding: '0 5px',
                backgroundColor: '#FFF',
            },
        },
        {
            props: { characteristicGroupTitleContainer: true },
            style: {
                display: 'block',
                width: '100%',
                marginTop: '10px',
                '@media (min-width: 600px)': {},
            },
        },
        {
            props: { labeledSelectFieldWithButtonContainer: true },
            style: {
                display: 'block',
                width: '100%',
                lineHeight: 1,
                gap: '10px',
                marginTop: '10px',
                alignItems: 'center',
                '@media (min-width: 600px)': {
                    display: 'flex',
                    justifyContent: 'flex-start',
                },
            },
        },
        {
            props: { labelOfSelectFieldWithButtonContainer: true },
            style: {
                textAlign: 'left',
                justifyContent: 'flex-start',
                width: '100%',
                '@media (min-width: 600px)': {
                    textAlign: 'right',
                    width: '35%',
                },
            },
        },
        {
            props: { selectOfSelectFieldWithButtonContainer: true },
            style: {
                textAlign: 'left',
                justifyContent: 'flex-start',
                width: '100%',
                marginTop: '5px',
                flexWrap: 'nowrap',
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
                '@media (min-width: 600px)': {
                    width: '65%',
                    marginTop: 0,
                },
            },
        },
        {
            props: { buttonOfSelectFieldWithButtonContainer: true },
            style: {
                display: 'block',
                '@media (min-width: 600px)': {},
            },
        },
        {
            props: { textFieldWithButtonTemplate: true },
            style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '10px',
                marginTop: '10px',
            },
        },
        {
            props: { textFieldOfTextFieldWithButtonTemplate: true },
            style: {
                flexGrow: 1,
            },
        },
        {
            props: { modalContentPadding: true },
            style: {
                padding: '10px 17px 17px 17px',
            },
        },
        {
            props: { marginTop7: true },
            style: {
                marginTop: '7px',
            },
        },
        {
            props: { imageInGoodListContainer: true },
            style: {
                position: 'relative',
                width: '100%',
                paddingTop: '100%',
                content: "''",
            },
        },
        {
            props: { absolutePositionInCenter: true },
            style: {
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                content: "''",
            },
        },
        {
            props: { maxWidthImageInGoodListContainer: true },
            style: {
                maxWidth: '40px',
                margin: '0 auto',
            },
        },
        {
            props: { flexCenter: true },
            style: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            },
        },
        {
            props: { flexEnd: true },
            style: {
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
            },
        },
    ],
}
