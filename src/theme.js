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
        IconButtonStyled: {
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
        InputLabelStyled: {
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
        },
        SelectStyled: {
            styleOverrides: {
                root: {
                    '& .MuiInputBase-input': {
                        padding: `7px 10px`,
                    },
                },
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
                    zIndex: '1500',
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
        TableHeadStyled: {
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
        },
        TableSortLabelStyled: {
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
