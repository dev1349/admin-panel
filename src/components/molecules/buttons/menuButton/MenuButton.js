import React from 'react'
import { Link } from '@mui/material'
import MenuItem from '../../../atoms/inputs/menuItem/MenuItem'
import IconButton from '../iconButton/IconButton'
import Menu from '../../../atoms/menu/Menu'
import { Link as RouterLink } from 'react-router-dom'
import { createStyled } from '../../../../services/style/createStyled'

const MenuButtonWrapperStyled = createStyled('MenuButtonWrapperStyle', 'div')

const MenuButtonWS = ({ id, anchorEl, handleClick, handleClose, menuItems, children, ...rest }) => {
    return (
        <MenuButtonWrapperStyled {...rest}>
            <IconButton
                id={`menuButton${id}`}
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                menuButton
            >
                {children}
            </IconButton>
            <Menu
                id={`menu${id}`}
                anchorEl={anchorEl}
                open={anchorEl?.id === `menuButton${id}`}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {menuItems.map(el => (
                    <MenuItem key={el.id} onClick={handleClose}>
                        <Link component={RouterLink} to={el.link} color="inherit" underline="none">
                            {el.title}
                        </Link>
                    </MenuItem>
                ))}
            </Menu>
        </MenuButtonWrapperStyled>
    )
}

export default MenuButtonWS
