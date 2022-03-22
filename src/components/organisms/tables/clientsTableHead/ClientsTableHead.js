import React, { useState } from 'react'
import TableRow from '../../../atoms/table/tableRow/TableRow'
import TableCell from '../../../atoms/table/tableCell/TableCell'
import FilterIcon from '../../../atoms/icons/filterIcon/FilterIcon'
import IconButton from '../../../molecules/buttons/iconButton/IconButton'
import TableSortLabel from '../../../atoms/table/tableSortLabel/TableSortLabel'
import { visuallyHidden } from '@mui/utils'
import ExpandMoreIcon from '../../../atoms/icons/expandMoreIcon/ExpandMoreIcon'
import Box from '../../../atoms/wrappers/box/Box'
import BoxNative from '@mui/material/Box'
import CheckboxFilterPopper from '../../../molecules/checkboxFilterPopper/CheckboxFilterPopper'
import FromToIntegerFilterPopper from '../../../molecules/fromToIntegerFilterPopper/FromToIntegerFilterPopper'
import FromToFloatFilterPopper from '../../../molecules/fromToFloatFilterPopper/FromToFloatFilterPopper'
import FromToDateFilterPopper from '../../../molecules/fromToDateFilterPopper/FromToDateFilterPopper'
import TableHead from '../../../atoms/table/tableHead/TableHead'
import { ClickAwayListener } from '@mui/material'

const ClientsTableHead = () => {
    const [filter, setFilter] = useState(null)
    const [anchorEl, setAnchorEl] = useState(null)
    const [order, setOrder] = useState('desc')
    const [orderBy, setOrderBy] = useState('dateCreate')

    const handleSorting = columnName => () => {
        const isAsc = orderBy === columnName && order === 'asc'
        setOrder(isAsc ? 'desc' : 'asc')
        setOrderBy(columnName)
    }

    const handleShowPopper = event => {
        if (event.currentTarget.id === anchorEl?.id) {
            setAnchorEl(null)
            return
        }
        setAnchorEl(event.currentTarget)
    }

    const handleClosePopper = () => setAnchorEl(null)

    const handleApplyFilter = payload =>
        setFilter(prev => {
            const fieldName = Object.keys(payload)[0]
            if (payload[fieldName]) {
                return { ...prev, ...payload }
            }
            const newFilter = { ...prev }
            delete newFilter[fieldName]
            if (Object.keys(newFilter).length) {
                return newFilter
            }
            return null
        })

    const headCells = [
        {
            id: 'name',
            title: 'Название',
            haveFiltering: true,
            haveSorting: false,
            align: 'left',
            filterPopper: (
                <CheckboxFilterPopper
                    id={'name'}
                    open={anchorEl?.id === 'name'}
                    anchorEl={anchorEl}
                    onClose={handleClosePopper}
                    filter={filter}
                    checkItems={[
                        {
                            id: 'registered',
                            title: 'Зарегистрирован',
                        },
                        {
                            id: 'unregistered',
                            title: 'Не зарегистрирован',
                        },
                    ]}
                    onApply={handleApplyFilter}
                />
            ),
        },
        {
            id: 'type',
            title: 'Тип',
            haveFiltering: true,
            haveSorting: false,
            align: 'left',
            filterPopper: (
                <CheckboxFilterPopper
                    id={'type'}
                    open={anchorEl?.id === 'type'}
                    anchorEl={anchorEl}
                    onClose={handleClosePopper}
                    filter={filter}
                    checkItems={[
                        {
                            id: 'individual',
                            title: 'Физическое лицо',
                        },
                        {
                            id: 'legalEntity',
                            title: 'Юридическое лицо',
                        },
                        {
                            id: 'organization',
                            title: 'Организация',
                        },
                    ]}
                    onApply={handleApplyFilter}
                />
            ),
        },
        {
            id: 'dateCreate',
            title: 'Дата создания',
            haveFiltering: true,
            haveSorting: false,
            align: 'left',
            filterPopper: (
                <FromToDateFilterPopper
                    id={'dateCreate'}
                    open={anchorEl?.id === 'dateCreate'}
                    anchorEl={anchorEl}
                    onClose={handleClosePopper}
                    filter={filter}
                    onApply={handleApplyFilter}
                />
            ),
        },
        {
            id: 'phone',
            title: 'Телефон',
            haveFiltering: false,
            haveSorting: false,
            align: 'left',
        },
        {
            id: 'email',
            title: 'Почта',
            haveFiltering: true,
            haveSorting: false,
            align: 'left',
            filterPopper: (
                <CheckboxFilterPopper
                    id={'email'}
                    open={anchorEl?.id === 'email'}
                    anchorEl={anchorEl}
                    onClose={handleClosePopper}
                    filter={filter}
                    checkItems={[
                        {
                            id: 'subscribed',
                            title: 'Подписан',
                        },
                        {
                            id: 'notSubscribed',
                            title: 'Не подписан',
                        },
                    ]}
                    onApply={handleApplyFilter}
                />
            ),
        },
        {
            id: 'orderQuantity',
            title: 'Заказов',
            haveFiltering: true,
            haveSorting: true,
            align: 'right',
            filterPopper: (
                <FromToIntegerFilterPopper
                    id={'orderQuantity'}
                    open={anchorEl?.id === 'orderQuantity'}
                    anchorEl={anchorEl}
                    onClose={handleClosePopper}
                    filter={filter}
                    onApply={handleApplyFilter}
                />
            ),
        },
        {
            id: 'turnover',
            title: 'Оборот',
            haveFiltering: true,
            haveSorting: true,
            align: 'right',
            filterPopper: (
                <FromToFloatFilterPopper
                    id={'turnover'}
                    open={anchorEl?.id === 'turnover'}
                    anchorEl={anchorEl}
                    onClose={handleClosePopper}
                    filter={filter}
                    onApply={handleApplyFilter}
                />
            ),
        },
        {
            id: 'order',
            title: 'Заказ',
            haveFiltering: true,
            haveSorting: true,
            align: 'right',
            filterPopper: (
                <FromToDateFilterPopper
                    id={'order'}
                    open={anchorEl?.id === 'order'}
                    anchorEl={anchorEl}
                    onClose={handleClosePopper}
                    filter={filter}
                    onApply={handleApplyFilter}
                />
            ),
        },
    ]

    return (
        <TableHead>
            <TableRow>
                <TableCell />
                {headCells.map(cell => (
                    <TableCell
                        key={cell.id}
                        align={cell.align}
                        headCell
                        sortDirection={orderBy === cell.id ? order : false}
                    >
                        {cell.haveSorting ? (
                            <TableSortLabel
                                active={orderBy === cell.id}
                                direction={orderBy === cell.id ? order : 'asc'}
                                onClick={handleSorting(cell.id)}
                            >
                                <Box component="span" sx={visuallyHidden}>
                                    {'sorted descending'}
                                </Box>
                                <span>{cell.title}</span>
                            </TableSortLabel>
                        ) : (
                            <span>{cell.title}</span>
                        )}
                        {cell.haveFiltering && (
                            <>
                                <ClickAwayListener
                                    onClickAway={
                                        cell.id === anchorEl?.id
                                            ? handleClosePopper
                                            : () => {}
                                    }
                                >
                                    <BoxNative component={'span'}>
                                        <IconButton
                                            id={cell.id}
                                            size="small"
                                            onClick={handleShowPopper}
                                        >
                                            {filter &&
                                            filter[cell.id] !== undefined ? (
                                                <FilterIcon
                                                    fontSize={'small'}
                                                    cursor={'pointer'}
                                                />
                                            ) : (
                                                <ExpandMoreIcon
                                                    cursor={'pointer'}
                                                    fontSize={'small'}
                                                />
                                            )}
                                        </IconButton>
                                        {cell.filterPopper}
                                    </BoxNative>
                                </ClickAwayListener>
                            </>
                        )}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}

export default ClientsTableHead
