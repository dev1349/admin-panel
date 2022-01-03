import React from 'react'
import { Breadcrumbs, styled, Typography } from '@mui/material'
import Link from '../../atoms/link/Link'
import { Link as RouterLink } from 'react-router-dom'

const BreadcrumbsStyled = styled(Breadcrumbs, {
    name: 'BreadcrumbsStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const BreadcrumbsWS = ({ breadcrumbs }) => {
    return (
        <BreadcrumbsStyled aria-label="breadcrumb">
            {breadcrumbs.map((el, index) =>
                el.link ? (
                    <Link
                        key={index}
                        underline="hover"
                        color="inherit"
                        to={el.link}
                        component={RouterLink}
                    >
                        {el.title}
                    </Link>
                ) : (
                    <Typography key={index} color="text.primary">
                        {el.title}
                    </Typography>
                )
            )}
        </BreadcrumbsStyled>
    )
}

export default BreadcrumbsWS
