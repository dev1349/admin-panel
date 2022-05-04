import React from 'react'
import { Breadcrumbs, Typography } from '@mui/material'
import Link from '../../atoms/link/Link'
import { Link as RouterLink } from 'react-router-dom'
import { useStyle } from '../../../hooks/useStyle'


const BreadcrumbsWS = ({ breadcrumbs }) => {
    const BreadcrumbsStyled = useStyle('BreadcrumbsStyle', Breadcrumbs)
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
