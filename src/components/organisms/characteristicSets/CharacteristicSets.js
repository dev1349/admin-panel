import React, { useState } from 'react'
import AdminPageHeader from '../../molecules/headers/adminPageHeader/AdminPageHeader'
import AdminPageBorder from '../../atoms/wrappers/adminPageBorder/AdminPageBorder'
import Box from '../../atoms/wrappers/box/Box'
import Table from '../../atoms/table/table/Table'
import TableHead from '../../atoms/table/tableHead/TableHead'
import TableRow from '../../atoms/table/tableRow/TableRow'
import TableCell from '../../atoms/table/tableCell/TableCell'
import TableSortLabel from '../../atoms/table/tableSortLabel/TableSortLabel'
import { visuallyHidden } from '@mui/utils'
import TableBody from '../../atoms/table/tableBody/TableBody'
import { getComparator, stableSort } from '../../../reducers/common/sortingFunctions'
import Checkbox from '../../atoms/inputs/checkbox/Checkbox'
import { Fade } from '@mui/material'
import IconButton from '../../molecules/buttons/iconButton/IconButton'
import EditIcon from '../../atoms/icons/editIcon/EditIcon'
import Typography from '../../atoms/textElements/typography/Typography'
import { totalStringValues } from '../../../common/commonValueFunction'

const CharacteristicSets = ({
    icon,
    title,
    buttons,
    characteristicSets,
    headLines,
    valueLength = 80,
    onSelect,
    selectedCharacteristicSets,
    order,
    orderBy,
    onRequestSort,
    onEditCharacteristicSet,
    isEditButtonDisabled,
}) => {
    const isSelected = (id, selectedCharacteristicSets) => selectedCharacteristicSets.includes(id)

    const aligns = headLines.map(headLine => (headLine.align ? headLine.align : 'left'))

    const [activeRow, setActiveRow] = useState(null)

    const handleSetActiveRow = index => () => setActiveRow(index)

    const handleUnSetActiveRow = () => setActiveRow(null)

    return (
        <>
            <AdminPageHeader icon={icon} title={title} buttons={buttons} />
            <AdminPageBorder>
                <Box marginTop7>
                    <Table dialogTable>
                        <TableHead dialogTableHead>
                            <TableRow dialogRow>
                                {headLines.map(headLine => (
                                    <TableCell dialogHeadCell key={headLine.id} align={headLine.align}>
                                        {headLine.canSort ? (
                                            <TableSortLabel
                                                dialogSortLabel
                                                active={orderBy === headLine.name}
                                                direction={orderBy === headLine.name ? order : 'asc'}
                                                onClick={onRequestSort(headLine.name)}
                                            >
                                                {headLine.content}
                                                {orderBy === headLine.name ? (
                                                    <Box component="span" sx={visuallyHidden}>
                                                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                                    </Box>
                                                ) : null}
                                            </TableSortLabel>
                                        ) : (
                                            headLine.content
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {stableSort(characteristicSets, getComparator(order, orderBy)).map((characteristicSet, index) => (
                                <TableRow
                                    hover
                                    dialogRow
                                    key={characteristicSet.id}
                                    dialogSelectedRow={isSelected(characteristicSet.id, selectedCharacteristicSets)}
                                    onMouseEnter={handleSetActiveRow(index)}
                                    onMouseLeave={handleUnSetActiveRow}
                                >
                                    <TableCell align={aligns[0]} dialogCell>
                                        <Checkbox
                                            dialogCheckbox
                                            disableRipple
                                            checked={isSelected(characteristicSet.id, selectedCharacteristicSets)}
                                            onChange={onSelect(characteristicSet.id)}
                                        />
                                    </TableCell>
                                    <TableCell align={aligns[1]} dialogCell>
                                        {characteristicSet.name}
                                    </TableCell>
                                    <TableCell align={aligns[2]} dialogCell>
                                        {totalStringValues(
                                            characteristicSet,
                                            [
                                                { itemsProperty: 'characteristicsGroup', propertyName: 'name' },
                                                { itemsProperty: 'characteristics', propertyName: 'name' },
                                            ],
                                            valueLength
                                        )}
                                    </TableCell>
                                    <TableCell align={aligns[3]} dialogCell>
                                        <Fade in={index === activeRow} timeout={0}>
                                            <div>
                                                <IconButton
                                                    dialogButton
                                                    disableRipple
                                                    onClick={onEditCharacteristicSet(characteristicSet.id)}
                                                    disabled={isEditButtonDisabled}
                                                >
                                                    <EditIcon />
                                                </IconButton>
                                            </div>
                                        </Fade>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    {!characteristicSets.length ? (
                        <Box marginTop7>
                            <Typography mainAdminText textAlignCenter component={'div'}>
                                Список характеристик пуст :(
                            </Typography>
                        </Box>
                    ) : (
                        ''
                    )}
                </Box>
            </AdminPageBorder>
        </>
    )
}

export default CharacteristicSets
