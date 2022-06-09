import React, { useState } from 'react'
import AdminPageHeader from '../../molecules/headers/adminPageHeader/AdminPageHeader'
import AdminPageBorder from '../../atoms/wrappers/AdminPageBorder/AdminPageBorder'
import Table from '../../atoms/table/table/Table'
import TableHead from '../../atoms/table/tableHead/TableHead'
import TableRow from '../../atoms/table/tableRow/TableRow'
import TableCell from '../../atoms/table/tableCell/TableCell'
import TableBody from '../../atoms/table/tableBody/TableBody'
import Box from '../../../components/atoms/wrappers/box/Box'
import Checkbox from '../../atoms/inputs/checkbox/Checkbox'
import CheckIcon from '../../atoms/icons/checkIcon/CheckIcon'
import IconButton from '../../molecules/buttons/iconButton/IconButton'
import EditIcon from '../../atoms/icons/editIcon/EditIcon'
import { Fade } from '@mui/material'
import { getComparator, stableSort } from '../../../reducers/common/sortingFunctions'
import TableSortLabel from '../../atoms/table/tableSortLabel/TableSortLabel'
import { visuallyHidden } from '@mui/utils'
import MaxWidthTemplate from '../../templates/maxWidthTemplate/MaxWidthTemplate'
import Typography from '../../atoms/textElements/typography/Typography'

const Characteristics = ({
    icon,
    title,
    buttons,
    characteristics,
    headLines,
    valueLength = 40,
    onSelect,
    selectedCharacteristics,
    order,
    orderBy,
    onRequestSort,
    onEditCharacteristic,
    isEditButtonDisabled,
}) => {
    const aligns = headLines.map(headLine => (headLine.align ? headLine.align : 'left'))

    const hasValues = characteristic =>
        characteristic.characteristicValues &&
        Array.isArray(characteristic.characteristicValues) &&
        characteristic.characteristicValues.length

    const characteristicValues = (characteristic, valueLength) => {
        if (!hasValues(characteristic)) {
            return ''
        }
        const stringValues = getValuesString(characteristic.characteristicValues)
        if (stringValues.length > valueLength) {
            return stringValues.slice(0, valueLength) + '...'
        }

        return stringValues
    }

    const getValuesString = values => values.reduce((acc, elem) => (acc === '' ? acc + elem.value : acc + ', ' + elem.value), '')

    const [activeRow, setActiveRow] = useState(null)
    const handleSetActiveRow = index => () => setActiveRow(index)
    const handleUnSetActiveRow = () => setActiveRow(null)

    const isSelected = (id, selectedCharacteristics) => selectedCharacteristics.includes(id)

    return (
        <MaxWidthTemplate>
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
                            {stableSort(characteristics, getComparator(order, orderBy)).map((characteristic, index) => (
                                <TableRow
                                    hover
                                    dialogRow
                                    key={characteristic.id}
                                    dialogSelectedRow={isSelected(characteristic.id, selectedCharacteristics)}
                                    onMouseEnter={handleSetActiveRow(index)}
                                    onMouseLeave={handleUnSetActiveRow}
                                >
                                    <TableCell align={aligns[0]} dialogCell>
                                        <Checkbox
                                            dialogCheckbox
                                            disableRipple
                                            checked={isSelected(characteristic.id, selectedCharacteristics)}
                                            onChange={onSelect(characteristic.id)}
                                        />
                                    </TableCell>
                                    <TableCell align={aligns[1]} dialogCell>
                                        {characteristic.name}
                                    </TableCell>
                                    <TableCell align={aligns[2]} dialogCell>
                                        {characteristic.orderNumber}
                                    </TableCell>
                                    <TableCell align={aligns[3]} dialogCell>
                                        {characteristic.isAdminOnly ? <CheckIcon dialogIcon /> : ''}
                                    </TableCell>
                                    <TableCell align={aligns[4]} dialogCell>
                                        {characteristic.isAvailableInFilter ? <CheckIcon dialogIcon /> : ''}
                                    </TableCell>
                                    <TableCell align={aligns[5]} dialogCell>
                                        {characteristicValues(characteristic, valueLength)}
                                    </TableCell>
                                    <TableCell align={aligns[6]} dialogCell>
                                        <Fade in={index === activeRow} timeout={0}>
                                            <div>
                                                <IconButton
                                                    dialogButton
                                                    disableRipple
                                                    onClick={onEditCharacteristic(characteristic.id)}
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
                    {!characteristics.length ? (
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
        </MaxWidthTemplate>
    )
}

export default Characteristics
