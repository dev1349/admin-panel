import React from 'react'
import { styled, TableRow } from '@mui/material'
import TableCell from '../../../atoms/table/tableCell/TableCell'
import IconButton from '../../buttons/iconButton/IconButton'
import DeleteIcon from '../../../atoms/icons/deleteIcon/DeleteIcon'
import HideImageIcon from '../../../atoms/icons/hideImageIcon/HideImageIcon'
import Img from '../../../atoms/img/Img'
import FloatField from '../../inputs/floatField/FloatField'
import NumberField from '../../inputs/numberField/NumberField'

export const SimpleTableRowStyled = styled(TableRow, {
    name: 'TableRowStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const SimpleTableRow = ({
    rowFields,
    deleteRow,
    cellsTypes,
    changePrice,
    changeCount,
}) => {
    return (
        <SimpleTableRowStyled>
            <TableCell
                align={
                    cellsTypes[0] === undefined
                        ? 'center'
                        : cellsTypes[0]
                        ? 'right'
                        : 'left'
                }
            >
                {rowFields.imgSrc ? (
                    <Img
                        src={rowFields.imgSrc}
                        alt={rowFields.name}
                        width={'40px'}
                    />
                ) : (
                    <HideImageIcon />
                )}
            </TableCell>
            <TableCell
                align={
                    cellsTypes[1] === undefined
                        ? 'center'
                        : cellsTypes[1]
                        ? 'right'
                        : 'left'
                }
            >
                {rowFields.vendorCode}
            </TableCell>
            <TableCell
                align={
                    cellsTypes[2] === undefined
                        ? 'center'
                        : cellsTypes[2]
                        ? 'right'
                        : 'left'
                }
            >
                {rowFields.name}
            </TableCell>
            <TableCell
                align={
                    cellsTypes[3] === undefined
                        ? 'center'
                        : cellsTypes[3]
                        ? 'right'
                        : 'left'
                }
            >
                <FloatField
                    value={rowFields.price}
                    pattern={
                        '^(|0|0[.]|0[.][0-9]|0[.][0-9][1-9]|0[.][1-9][0-9]|[1-9]|[1-9][0-9]+|[1-9][0-9]+[.]|[1-9][0-9]+[.][0-9]|[1-9][0-9]+[.][0-9][1-9]|[1-9][0-9]+[.][1-9][0-9])$'
                    }
                    onChange={changePrice(rowFields.id)}
                    name={'price'}
                    forTable
                />
            </TableCell>
            <TableCell
                align={
                    cellsTypes[4] === undefined
                        ? 'center'
                        : cellsTypes[4]
                        ? 'right'
                        : 'left'
                }
            >
                {rowFields.weight}
            </TableCell>
            <TableCell
                align={
                    cellsTypes[5] === undefined
                        ? 'center'
                        : cellsTypes[5]
                        ? 'right'
                        : 'left'
                }
            >
                <NumberField
                    value={rowFields.count}
                    onChange={changeCount(rowFields.id)}
                    name={'count'}
                    pattern={'^[0-9]*$'}
                    forTable
                />
            </TableCell>
            <TableCell
                align={
                    cellsTypes[6] === undefined
                        ? 'center'
                        : cellsTypes[6]
                        ? 'right'
                        : 'left'
                }
            >
                {rowFields.count * rowFields.price} грн.
            </TableCell>
            <TableCell key={'deleteRow'} align={'center'} padding={'none'}>
                <IconButton onClick={deleteRow(rowFields.id)}>
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </SimpleTableRowStyled>
    )
}

export default SimpleTableRow
