import React from 'react'
import { TableRow } from '@mui/material'
import TableCell from '../../../atoms/table/tableCell/TableCell'
import Checkbox from '../../../atoms/inputs/checkbox/Checkbox'
import IconButton from '../../buttons/iconButton/IconButton'
import EditIcon from '../../../atoms/icons/editIcon/EditIcon'
import { createStyled } from '../../../../services/style/createStyled'

const TableRowStyled = createStyled('TableRowStyle', TableRow)

const WSTableRow = ({
    rowFields,
    id,
    headerCellTypes,
    onCheckRow,
    onEditRow,
    isRowChecked,
}) => {
    const labelId = `enhanced-table-checkbox-${id}`

    return (
        <TableRowStyled>
            <TableCell key={'checkbox'} padding="checkbox">
                <Checkbox
                    checked={isRowChecked(id)}
                    onChange={onCheckRow(id)}
                    inputProps={{
                        'aria-labelledby': labelId,
                    }}
                />
            </TableCell>
            {Object.keys(rowFields)
                .slice(1)
                .map((keyName, index) => (
                    <TableCell
                        key={keyName}
                        align={
                            headerCellTypes[index] === undefined
                                ? 'center'
                                : headerCellTypes[index]
                                ? 'right'
                                : 'left'
                        }
                        padding={'none'}
                    >
                        {rowFields[keyName]}
                    </TableCell>
                ))}
            <TableCell key={'editButton'} align={'center'} padding={'none'}>
                <IconButton onClick={onEditRow(id)}>
                    <EditIcon />
                </IconButton>
            </TableCell>
        </TableRowStyled>
    )
}

export default WSTableRow
