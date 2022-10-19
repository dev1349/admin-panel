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
        {
            props: { catalogContainer: true },
            style: {
                display: 'flex',
                justifyContent: 'left',
            },
        },
        {
            props: { catalogItemsContainer: true },
            style: {
                backgroundColor: '#c4c4c4',
                color: '#FFF',
                margin: 0,
                flexShrink: 0,
                boxSizing: 'border-box',
                position: 'relative',
                cursor: 'pointer',
                height: '100%',
                minHeight: '54px',
                content: '""',
                minWidth: '200px',
                maxWidth: '330px',
            },
        },
        {
            props: { catalogItemContainer: true },
            style: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '57px',
            },
        },
        {
            props: { catalogItemLinkContainer: true },
            style: {
                position: 'relative',
                color: '#F2F2F0',
                textDecoration: 'none',
                padding: '7px',
                display: 'block',
                cursor: 'pointer',
            },
        },
        {
            props: { addNewFirstLevelItemButtonContainer: true },
            style: {
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                borderRadius: '50%',
            },
        },
        {
            props: { addNewSecondLevelItemButtonContainer: true },
            style: {
                padding: '5px',
                position: 'absolute',
                bottom: '5px',
                right: '5px',
                backgroundColor: '#FFF',
                borderRadius: '50%',
            },
        },
        {
            props: { addNewSecondLevelItemButtonHideContainer: true },
            style: {
                display: 'none',
            },
        },
        {
            props: { activeMenuItemContainer: true },
            style: {
                boxShadow: '0px 0px 0px 2px #525050',
                borderTopRightRadius: '15px',
                borderBottomRightRadius: '15px',
            },
        },
        {
            props: { catalogSubItemsContainer: true },
            style: {
                flexGrow: 1,
                backgroundColor: '#FFF',
                color: '#373737',
                margin: 0,
                boxSizing: 'border-box',
                flexShrink: 1,
                position: 'relative',
                cursor: 'pointer',
                height: '100%',
            },
        },
        {
            props: { activeCatalogSubItemsContainer: true },
            style: {
                boxShadow: '0px 0px 0px 2px #7fe376',
                backgroundColor: '#FFF',
                position: 'relative',
                borderBottomRightRadius: '25px',
                height: '100%',
                minHeight: '44px',
                boxSizing: 'border-box',
            },
        },
        {
            props: { catalogSubItemContainer: true },
            style: {
                position: 'relative',
                color: '#000',
                textDecoration: 'none',
                display: 'block',
                fontFamily: "'Montserrat', sans-serif",
                textTransform: 'uppercase',
                fontSize: '12px',
                lineHeight: '17px',
                fontWeight: 400,
                padding: '8px 7px',
                cursor: 'pointer',
            },
        },
        {
            props: { activeCatalogSubItemContainer: true },
            style: {
                zIndex: 10,
                boxShadow: '0px 0px 0px 2px #525050',
                backgroundColor: '#c4c4c4',
                borderTopRightRadius: '15px',
            },
        },
        {
            props: { catalogSubSubItemContainer: true },
            style: {
                position: 'relative',
                textDecoration: 'none',
                display: 'block',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '12px',
                lineHeight: '15px',
                fontWeight: 400,
                padding: '4px 7px',
                color: '#7D7D7D',
                cursor: 'pointer',
            },
        },
        {
            props: { activeCatalogSubSubItemContainer: true },
            style: {
                boxShadow: '0px 0px 0px 2px #525050',
                backgroundColor: '#c4c4c4',
                borderTopRightRadius: '12px',
                borderBottomRightRadius: '12px',
            },
        },
        {
            props: { megaMenuShadowContainer: true },
            style: {
                display: 'flex',
                justifyContent: 'flex-start',
                boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.25)',
            },
        },
        {
            props: { catalogItemButtonsContainer: true },
            style: {
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                right: '0px',
                display: 'flex',
                justifyContent: 'flex-start',
                gap: '5px',
                padding: '0 5px',
                backgroundColor: '#c4c4c4',
                borderTopRightRadius: '15px',
                borderBottomRightRadius: '15px',
            },
        },
        {
            props: { catalogSubItemButtonsContainer: true },
            style: {
                position: 'absolute',
                top: '50%',
                right: '0px',
                transform: 'translateY(-50%)',
                display: 'flex',
                justifyContent: 'flex-start',
                gap: '5px',
                padding: '0 5px',
                borderTopRightRadius: '15px',
                backgroundColor: '#c4c4c4',
            },
        },
        {
            props: { activeCatalogSubSubLevelContainer: true },
            style: {
                position: 'relative',
                boxShadow: '0px 0px 0px 2px #525050',
            },
        },
        {
            props: { addSubSubItemsButtonContainer: true },
            style: {
                position: 'absolute',
                bottom: '0px',
                right: '0px',
                padding: '5px',
                borderTopLeftRadius: '15px',
                borderBottomRightRadius: '15px',
                backgroundColor: '#FFF',
            },
        },
        {
            props: { addSubSubItemButtonsContainer: true },
            style: {
                position: 'absolute',
                top: '50%',
                right: '0px',
                transform: 'translateY(-50%)',
                display: 'flex',
                justifyContent: 'flex-start',
                gap: '2px',
                padding: '0 2px',
                borderTopRightRadius: '12px',
                borderBottomRightRadius: '12px',
                backgroundColor: '#c4c4c4',
            },
        },
        {
            props: { megaMenuModalIconTitleContainer: true },
            style: {
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '5px',
            },
        },
        {
            props: { megaMenuModalButtonsContainer: true },
            style: {
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '5px',
            },
        },
        {
            props: { megaMenuModalHeaderContainer: true },
            style: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '5px 10px',
                backgroundColor: '#373737',
            },
        },
        {
            props: { megaMenuModalContentContainer: true },
            style: {
                padding: '10px',
            },
        },
    ],
}
