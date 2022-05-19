import React from 'react'
import ListItemButton from '../../../atoms/list/listItemButton/ListItemButton'
import ListItemIcon from '../../../atoms/list/listItemIcon/ListItemIcon'
import ListItemText from '../../../atoms/list/listItemText/ListItemText'
import Link from '../../../atoms/link/Link'
import { Link as RouterLink } from 'react-router-dom'
import ExpandLessIcon from '../../../atoms/icons/expandLessIcon/ExpandLessIcon'
import ExpandMoreIcon from '../../../atoms/icons/expandMoreIcon/ExpandMoreIcon'

const NavListItemWS = ({
    id,
    title,
    link,
    subItems,
    open,
    onClick,
    icon,
    sx,
    hideNavMenu,
}) => {
    const handleClick = () => {
        if (onClick) onClick(id)
    }

    return (
        <>
            {!subItems && (
                <Link
                    component={RouterLink}
                    to={link}
                    color="inherit"
                    underline="none"
                    onClick={hideNavMenu}
                >
                    <ListItemButton sx={sx}>
                        {icon && <ListItemIcon>{icon}</ListItemIcon>}
                        <ListItemText primary={title} />
                    </ListItemButton>
                </Link>
            )}

            {subItems && (
                <Link
                    component={RouterLink}
                    to={link}
                    color="inherit"
                    underline="none"
                >
                    <ListItemButton onClick={handleClick} sx={sx}>
                        {icon && <ListItemIcon>{icon}</ListItemIcon>}
                        <ListItemText primary={title} />
                        {subItems &&
                            (open[id] ? (
                                <ExpandLessIcon />
                            ) : (
                                <ExpandMoreIcon />
                            ))}
                    </ListItemButton>
                </Link>
            )}
        </>
    )
}

export default NavListItemWS
