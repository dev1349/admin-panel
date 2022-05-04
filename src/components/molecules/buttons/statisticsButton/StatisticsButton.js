import React from 'react'
import MenuItem from '../../../atoms/inputs/selectField/menuItem/MenuItem'
import IconButton from '../iconButton/IconButton'
import Menu from '../../../atoms/menu/Menu'
import StatisticsSubHeader from '../../../atoms/textElements/statisticsSubHeader/StatisticsSubHeader'
import StatisticsMenuItem from '../../menu/statisticsMenuItem/StatisticsMenuItem'
import ListDivider from '../../../atoms/list/listDivider/ListDivider'
import Badge from '../../../atoms/badge/Badge'
import { useStyle } from '../../../../hooks/useStyle'


const StatisticsButton = ({
                              id,
                              anchorEl,
                              handleClick,
                              handleClose,
                              menuItems,
                              children,
                              ...rest
                          }) => {
    const StatisticsButtonWrapperStyled = useStyle('StatisticsButtonWrapperStyle', 'div')
    const StatisticsUlStyled = useStyle('StatisticsUlStyle', 'ul')
    const StatisticsLiStyled = useStyle('StatisticsLiStyle', 'li')

    const NotificationsCount = menuItems.reduce((acc, item) => {
        return (
            acc +
            item.subItems.reduce((subAcc, subItem) => {
                return subAcc + subItem.count
            }, 0)
        )
    }, 0)

    return (
        <StatisticsButtonWrapperStyled {...rest}>
            <Badge badgeContent={NotificationsCount}>
                <IconButton
                    id={`menuButton${id}`}
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={
                        anchorEl?.id === `menuButton${id}` ? 'true' : undefined
                    }
                    onClick={handleClick}
                    menuButton
                >
                    {children}
                </IconButton>
            </Badge>
            <Menu
                id={`menu${id}`}
                anchorEl={anchorEl}
                open={anchorEl?.id === `menuButton${id}`}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {menuItems.map(item => (
                    <StatisticsLiStyled key={item.id}>
                        <StatisticsSubHeader>{item.title}</StatisticsSubHeader>
                        <StatisticsUlStyled>
                            {item.subItems.map(subItems => (
                                <MenuItem key={subItems.id} component={'li'}>
                                    <StatisticsMenuItem
                                        itemText={subItems.title}
                                        itemCount={subItems.count}
                                    />
                                </MenuItem>
                            ))}
                        </StatisticsUlStyled>
                        <ListDivider/>
                    </StatisticsLiStyled>
                ))}
            </Menu>
        </StatisticsButtonWrapperStyled>
    )
}

export default StatisticsButton
