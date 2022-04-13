export default {
    CategoriesWidthTemplateStyled: {
        styleOverrides: {
            root: {
                maxWidth: '200px',
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
}
//GrayBorderWrapperForComponentStyle
