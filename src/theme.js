import { createTheme } from '@mui/material'

const globalTheme = createTheme({
    components: {
        AddIconStyled: {
            styleOverrides: {
                root: {},
            },
        },
        ArrowDropDownIconStyled: {
            styleOverrides: {
                root: {},
            },
        },
        ArrowDropUpIconStyled: {
            styleOverrides: {
                root: {},
            },
        },
        DeleteIconStyled: {
            styleOverrides: {
                root: {},
            },
        },
        EditIconStyled: {
            styleOverrides: {
                root: {},
            },
        },
        ListIconStyled: {
            styleOverrides: {
                root: {},
            },
        },
        SaveIconStyled: {
            styleOverrides: {
                root: {},
            },
        },
        UndoIconStyled: {
            styleOverrides: {
                root: {},
            },
        },
        FilterIconStyled: {
            styleOverrides: {
                root: {},
            },
        },
        HideImageIconStyled: {
            styleOverrides: {
                root: {},
            },
        },
        MenuIconStyled: {
            styleOverrides: {
                root: {},
            },
        },
        ImportExportIconStyled: {
            styleOverrides: {
                root: {},
            },
        },
        ShopsIconStyled: {
            styleOverrides: {
                root: {},
            },
        },
        HelpIconStyled: {
            styleOverrides: {
                root: {},
            },
        },
        LogoutIconStyled: {
            styleOverrides: {
                root: {},
            },
        },
        HomeIconStyled: {
            styleOverrides: {
                root: {},
            },
        },
        ShoppingCartIconStyled: {
            styleOverrides: {
                root: {},
            },
        },
        CatalogIconStyled: {
            styleOverrides: {
                root: {},
            },
        },
        ClientsIconStyled: {
            styleOverrides: {
                root: {},
            },
        },
        DialogsIconStyled: {
            styleOverrides: {
                root: {},
            },
        },
        SiteIconStyled: {
            styleOverrides: {
                root: {},
            },
        },
        SettingsIconStyled: {
            styleOverrides: {
                root: {},
            },
        },
        AccountIconStyled: {
            styleOverrides: {
                root: {},
            },
        },
        ListItemIconStyled: {
            styleOverrides: {
                root: {
                    minWidth: '38px',
                },
            },
        },
        ExpandLessIconStyled: {
            styleOverrides: {
                root: {},
            },
        },
        ExpandMoreIconStyled: {
            styleOverrides: {
                root: {},
            },
        },
        SearchIconStyled: {
            styleOverrides: {
                root: {},
            },
        },
        NotificationsIconStyled: {
            styleOverrides: {
                root: {},
            },
        },
        ListItemTextStyled: {
            styleOverrides: {
                root: {
                    padding: '0',
                    margin: '0',
                },
            },
            variants: [
                {
                    props: { withoutExpandIcon: true },
                    style: {
                        paddingLeft: '25px',
                    },
                },
                {
                    props: { activeItem: true },
                    style: {
                        '& .MuiTypography-root': {
                            fontWeight: 'bold',
                        },
                    },
                },
            ],
        },
        ListItemButtonStyled: {
            styleOverrides: {
                root: {},
            },
            variants: [
                {
                    props: { sub: true },
                    style: {
                        paddingLeft: '60px',
                    },
                },
            ],
        },
        ListStyled: {
            styleOverrides: {
                root: {
                    padding: '0',
                },
            },
        },
        ListSubHeaderStyled: {
            styleOverrides: {
                root: {},
            },
        },
        ListDividerStyled: {
            styleOverrides: {
                root: {},
            },
        },
        ImgStyled: {
            styleOverrides: {
                root: {},
            },
            variants: [
                {
                    props: { logo: true },
                    style: {
                        height: '24px',
                    },
                },
            ],
        },
        BadgeStyled: {
            styleOverrides: {
                root: {
                    '& .MuiBadge-badge': {
                        backgroundColor: 'orange',
                        color: 'white',
                    },
                },
            },
        },
        IconButtonStyled: {
            styleOverrides: {
                root: {},
            },
            variants: [
                {
                    props: { menuButton: true },
                    style: {
                        zIndex: 1310,
                    },
                },
            ],
        },
        MenuButtonStyled: {
            styleOverrides: {
                root: {},
            },
        },
        MenuStyled: {
            styleOverrides: {
                root: {},
            },
        },
        MenuButtonWrapperStyled: {
            styleOverrides: {
                root: {},
            },
        },
        StatisticsButtonWrapperStyled: {
            styleOverrides: {
                root: {},
            },
        },
        DrawerStyled: {
            styleOverrides: {
                root: {
                    zIndex: 1360,
                },
            },
        },
        PageHeaderWrapperStyled: {
            styleOverrides: {
                root: {},
            },
        },
        LinkStyled: {
            styleOverrides: {
                root: {},
            },
            variants: [
                {
                    props: { hoverUnderline: true },
                    style: {
                        '&:hover': {
                            textDecoration: 'underline',
                        },
                    },
                },
            ],
        },
        BreadcrumbsStyled: {
            styleOverrides: {
                root: {
                    marginLeft: '30px',
                    marginTop: '5px',
                    '& .MuiBreadcrumbs-li': {
                        margin: '0',
                    },
                    '& .MuiBreadcrumbs-separator': {
                        marginBottom: '0',
                    },
                },
            },
        },
        TypographyStyled: {
            styleOverrides: {
                root: {},
            },
        },
        H1Styled: {
            styleOverrides: {
                root: {
                    fontSize: '22px',
                    color: 'rgba(0, 0, 0, 0.87)',
                    display: 'block',
                    fontWeight: '400',
                },
            },
            variants: [
                {
                    props: { fs: true },
                    style: {
                        fontSize: '32px',
                    },
                },
            ],
        },
        H2Styled: {
            styleOverrides: {
                root: {
                    fontSize: '18px',
                    color: 'rgba(0, 0, 0, 0.87)',
                    display: 'block',
                    fontWeight: '400',
                },
            },
        },
        H3Styled: {
            styleOverrides: {
                root: {
                    fontSize: '16px',
                    color: 'rgba(0, 0, 0, 0.87)',
                    display: 'block',
                    fontWeight: '400',
                },
            },
        },
        StatisticsSubHeaderStyled: {
            styleOverrides: {
                root: {
                    paddingLeft: '16px',
                    paddingTop: '6px',
                    color: 'lightgrey',
                    fontSize: '12px',
                },
            },
        },
        ModalHeaderStyled: {
            styleOverrides: {
                root: {
                    display: 'block',
                    textAlign: 'center',
                },
            },
        },
        FormStyled: {
            styleOverrides: {
                root: {
                    padding: '0',
                    margin: '0',
                },
            },
        },
        CheckboxStyled: {
            styleOverrides: {
                root: {},
            },
        },
        FormControlLabelStyled: {
            styleOverrides: {
                root: {},
            },
        },
        InputLabelStyled: {
            styleOverrides: {
                root: {},
            },
        },
        TextFieldMultilineStyled: {
            styleOverrides: {
                root: {},
            },
        },
        MultilineFieldStyled: {
            styleOverrides: {
                root: {
                    '& .MuiInputBase-multiline': {
                        padding: '0px',
                    },
                    '& .MuiInputBase-inputMultiline': {
                        padding: `7px 10px`,
                    },
                },
            },
        },
        TextFieldStyled: {
            styleOverrides: {
                root: {
                    '& .MuiInputBase-input': {
                        padding: `7px 10px`,
                    },
                },
            },
            variants: [
                {
                    props: { forTable: true },
                    style: {
                        '& .MuiInputBase-input': {
                            fontSize: '14px',
                        },
                    },
                },
            ],
        },
        FormControlStyled: {
            styleOverrides: {
                root: {},
            },
        },
        MenuItemStyled: {
            styleOverrides: {
                root: {},
            },
            variants: [
                {
                    props: { forTable: true },
                    style: {
                        fontSize: '14px',
                    },
                },
            ],
        },
        SelectStyled: {
            styleOverrides: {
                root: {
                    '& .MuiInputBase-input': {
                        padding: `7px 10px`,
                    },
                },
            },
            variants: [
                {
                    props: { forTable: true },
                    style: {
                        fontSize: '14px',
                    },
                },
            ],
        },
        AutocompleteStyled: {
            styleOverrides: {
                root: {
                    '& .MuiAutocomplete-inputRoot': {
                        padding: '0',
                    },
                },
            },
        },
        LabeledAutocompleteStyled: {
            styleOverrides: {
                root: {},
            },
        },
        LabeledDateTimeFromToFieldStyled: {
            styleOverrides: {
                root: {},
            },
        },
        CircularProgressStyled: {
            styleOverrides: {
                root: {},
            },
        },
        LoaderWindowTemplateStyled: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: '1350',
                },
            },
        },
        SimpleButtonStyled: {
            styleOverrides: {
                root: {},
            },
        },
        TableStyled: {
            styleOverrides: {
                root: {},
            },
        },
        TableBodyStyled: {
            styleOverrides: {
                root: {},
            },
        },
        TableCellStyled: {
            styleOverrides: {
                root: {
                    padding: '0 5px',
                },
            },
        },
        TabStyled: {
            styleOverrides: {
                root: {},
            },
        },
        TabPanelStyled: {
            styleOverrides: {
                root: {},
            },
        },
        GreyBorderedWrapperStyled: {
            styleOverrides: {
                root: {
                    boxSizing: 'border-box',
                    border: '1px solid lightgrey',
                },
            },
        },
        PriceStyled: {
            styleOverrides: {
                root: {
                    color: 'orange',
                    fontSize: '14px',
                },
            },
            variants: [
                {
                    props: { oldPrice: true },
                    style: {
                        color: 'inherit',
                        textDecoration: 'line-through',
                    },
                },
            ],
        },
        StatisticsCountStyled: {
            styleOverrides: {
                root: {
                    color: 'white',
                    backgroundColor: 'green',
                    fontSize: '12px',
                    padding: '0 5px',
                    borderRadius: '10px',
                    marginLeft: '20px',
                },
            },
            variants: [
                {
                    props: { attention: true },
                    style: {
                        backgroundColor: 'orange',
                    },
                },
            ],
        },
        StatisticsTextStyled: {
            styleOverrides: {
                root: {},
            },
        },
        StatisticsLiStyled: {
            styleOverrides: {
                root: {},
            },
        },
        StatisticsUlStyled: {
            styleOverrides: {
                root: {
                    padding: 0,
                    margin: 0,
                },
            },
        },
        CountLabelStyled: {
            styleOverrides: {
                root: {
                    backgroundColor: 'green',
                    margin: 0,
                    padding: '5px',
                    borderRadius: '3px',
                },
            },
            variants: [
                {
                    props: { attention: true },
                    style: {
                        backgroundColor: 'orange',
                    },
                },
            ],
        },
        TextBetweenInputsStyled: {
            styleOverrides: {
                root: {
                    display: 'inline-flex',
                    lineHeight: '36px',
                },
            },
        },
        GreyBorderedWrapperForComponentStyled: {
            styleOverrides: {
                root: {
                    boxSizing: 'border-box',
                    border: '1px solid lightgrey',
                },
            },
        },
        ButtonsWrapperTemplateStyled: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    flexWrap: 'nowrap',
                    flexShrink: '0',
                },
            },
        },
        FieldTemplateStyled: {
            styleOverrides: {
                root: {
                    display: 'block',
                    width: '100%',
                    '@media (min-width: 600px)': {
                        marginLeft: '10px',
                        width: '75%',
                    },
                },
            },
        },
        TitleTextPaddingLeftStyled: {
            styleOverrides: {
                root: {
                    paddingLeft: '7px',
                },
            },
        },
        FlexStartWithPaddingTemplateStyled: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    padding: '10px',
                },
            },
        },
        FlexTemplateStyled: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    flexWrap: 'wrap',
                },
            },
        },
        CategoriesWidthTemplateStyled: {
            styleOverrides: {
                root: {
                    maxWidth: '200px',
                },
            },
        },
        FixedWidthContainerTemplateStyled: {
            styleOverrides: {
                root: {
                    width: '100%',
                    '@media (min-width: 1500px)': {
                        width: '18%',
                    },
                },
            },
        },
        PaddingWidthContainerTemplateStyled: {
            styleOverrides: {
                root: {
                    width: '100%',
                    paddingLeft: '20px',
                    '@media (min-width: 1500px)': {
                        marginLeft: '50px',
                        width: '15%',
                    },
                },
            },
        },
        LabeledInputTemplateStyled: {
            styleOverrides: {
                root: {
                    padding: '5px 0',
                    border: 'none',
                    display: 'block',
                    '@media (min-width: 600px)': {
                        display: 'flex',
                        alignItems: 'center',
                    },
                },
            },
            variants: [
                {
                    props: { fixedWidthWithMarginRight: true },
                    style: {
                        width: '100%',
                        '@media (min-width: 1500px)': {
                            width: '18%',
                            marginRight: '20px',
                        },
                    },
                },
            ],
        },
        LabelTemplateStyled: {
            styleOverrides: {
                root: {
                    display: 'block',
                    width: '100%',
                    '@media (min-width: 600px)': {
                        width: '25%',
                        textAlign: 'right',
                    },
                },
            },
            variants: [
                {
                    props: { alignLeft: true },
                    style: {
                        textAlign: 'left',
                        width: '100%',
                        '@media (min-width: 1500px)': {
                            width: '60%',
                            textAlign: 'left',
                        },
                    },
                },
                {
                    props: { alignLeftFixedWidth: true },
                    style: {
                        '@media (min-width: 600px)': {
                            textAlign: 'left',
                            width: '20%',
                        },
                    },
                },
            ],
        },
        MaxWidthTemplateStyled: {
            styleOverrides: {
                root: {
                    maxWidth: '1000px',
                    margin: '0 auto',
                    padding: '10px',
                },
            },
        },
        PaddingTemplateStyled: {
            styleOverrides: {
                root: {
                    padding: '10px',
                },
            },
        },
        TitleAndButtonsTemplateStyled: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 0',
                },
            },
        },
        TitleBreadcrumbsButtonsTemplateStyled: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'left',
                    padding: '10px 0',
                },
            },
        },
        LastChildToRightTemplateStyled: {
            styleOverrides: {
                root: {
                    margin: '0 0 0 auto',
                },
            },
        },
        VerticalModalTemplateStyled: {
            styleOverrides: {
                root: {
                    display: 'block',
                    textAlign: 'center',
                    padding: '30px',
                },
            },
        },
        PaddingBottomTemplateStyled: {
            styleOverrides: {
                root: {
                    paddingBottom: '10px',
                },
            },
        },
        PaddingTopTemplateStyled: {
            styleOverrides: {
                root: {
                    paddingTop: '10px',
                },
            },
        },
        PageHeaderTemplateStyled: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    alignItems: 'center',
                },
            },
        },
        PageHeaderItemRightTemplateStyled: {
            styleOverrides: {
                root: {
                    margin: '0 0 0 auto',
                },
            },
        },
        FlexSpaceBetweenTemplateStyled: {
            styleOverrides: {
                root: {
                    padding: '10px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                },
            },
        },
        StatisticsItemTemplateStyled: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                },
            },
        },
        NavTemplateStyled: {
            styleOverrides: {
                root: {
                    padding: '20px',
                },
            },
        },
        PaddingBetweenButtonsTemplateStyled: {
            styleOverrides: {
                root: {
                    display: 'block',
                    '@media (min-width: 800px)': {
                        display: 'flex',
                    },
                },
            },
        },
        ButtonWrapperStyled: {
            styleOverrides: {
                root: {
                    margin: '0',
                    marginTop: '10px',
                    marginLeft: '0',
                    '@media (min-width: 800px)': {
                        marginLeft: '20px',
                        '&:first-of-type': {
                            marginLeft: '0',
                        },
                    },
                },
            },
        },
        Header1Styled: {
            styleOverrides: {
                root: {},
            },
        },
        Header2Styled: {
            styleOverrides: {
                root: {
                    backgroundColor: 'lightgrey',
                },
            },
        },
        LabeledNumberFieldStyled: {
            styleOverrides: {
                root: {},
            },
        },
        LabeledTextFieldStyled: {
            styleOverrides: {
                root: {},
            },
        },
        LabeledTextFieldMultilineStyled: {
            styleOverrides: {
                root: {},
            },
        },
        SimpleModalStyled: {
            styleOverrides: {
                root: {
                    backgroundColor: 'white',
                    boxShadow: '0 0 15px 5px #000000',
                    padding: '30px',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    maxWidth: '400px',
                },
            },
        },
        ZIndexedModalStyled: {
            styleOverrides: {
                root: {
                    zIndex: 1350,
                },
            },
        },
        AtomTableHeadStyled: {
            styleOverrides: {
                root: {},
            },
        },
        TableHeadStyled: {
            styleOverrides: {
                root: {
                    backgroundColor: 'lightgrey',
                    border: '1px solid lightgrey',
                },
            },
        },
        SimpleTableHeadStyled: {
            styleOverrides: {
                root: {
                    backgroundColor: 'lightgrey',
                    border: '1px solid lightgrey',
                },
            },
        },
        AtomTableRowStyled: {
            styleOverrides: {
                root: {},
            },
        },
        GoodsTableHeadStyled: {
            styleOverrides: {
                root: {
                    backgroundColor: 'lightgrey',
                    border: '1px solid lightgrey',
                },
            },
        },
        TableRowStyled: {
            styleOverrides: {
                root: {
                    border: '1px solid lightgrey',
                },
            },
            variants: [
                {
                    props: { default: true },
                    style: {
                        height: '45px',
                    },
                },
                {
                    props: { defaultHeading: true },
                    style: {
                        height: '45px',
                        backgroundColor: 'lightgrey',
                    },
                },
            ],
        },
        SimpleTableRowStyled: {
            styleOverrides: {
                root: {
                    border: '1px solid lightgrey',
                },
            },
        },
        GoodsTableRowStyled: {
            styleOverrides: {
                root: {
                    border: '1px solid lightgrey',
                },
            },
        },
        SimpleTableFooterStyled: {
            styleOverrides: {
                root: {
                    border: '1px solid lightgrey',
                },
            },
        },
        SimpleTableTotalStyled: {
            styleOverrides: {
                root: {},
            },
        },
        TableSortLabelStyled: {
            styleOverrides: {
                root: {},
            },
        },
        TablePaginationStyled: {
            styleOverrides: {
                root: {},
            },
        },
        TabTitlesWrapperStyled: {
            styleOverrides: {
                root: {
                    borderBottom: '1px solid lightgrey',
                },
            },
        },
        HorizontalTabTitlesStyled: {
            styleOverrides: {
                root: {
                    '& .MuiTabs-scrollButtons.Mui-disabled': {
                        opacity: '0.3',
                    },
                },
            },
        },
        HorizontalTabsBoxStyled: {
            styleOverrides: {
                root: {
                    width: '100%',
                },
            },
        },
    },
})

export default globalTheme
