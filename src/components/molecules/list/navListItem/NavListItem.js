import React from 'react'
import ListItemButton from '../../../atoms/list/listItemButton/ListItemButton'
import ListItemIcon from '../../../atoms/list/listItemIcon/ListItemIcon'
import ListItemText from '../../../atoms/list/listItemText/ListItemText'
import ExpandLessIcon from '../../../atoms/icons/expandLessIcon/ExpandLessIcon'
import ExpandMoreIcon from '../../../atoms/icons/expandMoreIcon/ExpandMoreIcon'
import RouterLink from '../../../atoms/routerLink/RouterLink'
import Link from '../../../atoms/link/Link'
import Container from '../../../templates/container/Container'

const NavListItemMolecules = ({ id, title, link, subItems, open, onClick, icon, sx, pathname }) => {
    const handleClick = () => {
        onClick(id)
    }

    const isItemActive = !!pathname && !!link && (link === '/' ? link === pathname : pathname.includes(link))

    return (
        <>
            {!subItems && (
                <ListItemButton
                    sx={sx}
                    component={RouterLink}
                    to={link}
                    color="inherit"
                    underline="none"
                    disableRipple
                    adminListItemButton
                    adminActiveListItemButton={isItemActive}
                >
                    {icon && <ListItemIcon adminListItemIcon>{icon}</ListItemIcon>}
                    <ListItemText primary={title} withoutIconListItemText={!icon} />
                </ListItemButton>
            )}

            {subItems && (
                <ListItemButton sx={sx} disableRipple adminListItemButton adminActiveListItemButton={isItemActive}>
                    {link ? (
                        <Link component={RouterLink} to={link} color="inherit" underline="none" adminNavRouterLink>
                            {icon && <ListItemIcon adminListItemIcon>{icon}</ListItemIcon>}
                            <ListItemText primary={title} withoutIconListItemText={!icon} />
                        </Link>
                    ) : (
                        <>
                            {icon && <ListItemIcon adminListItemIcon>{icon}</ListItemIcon>}
                            <ListItemText primary={title} withoutIconListItemText={!icon} />
                        </>
                    )}

                    {subItems && (
                        <Container expandIconContainer>
                            {open.includes(id) ? <ExpandLessIcon onClick={handleClick} /> : <ExpandMoreIcon onClick={handleClick} />}
                        </Container>
                    )}
                </ListItemButton>
            )}
        </>
    )
}

export default NavListItemMolecules
