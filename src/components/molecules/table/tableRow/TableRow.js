import React from 'react'
import styled from 'styled-components'
import { TableRow } from '@mui/material'
import TableCell from '../../../atoms/table/tableCell/TableCell'
import Checkbox from '../../../atoms/inputs/checkbox/Checkbox'
import IconButton from '../../iconButton/IconButton'
import EditIcon from '../../../atoms/icons/editIcon/EditIcon'

const RowStyled = styled(TableRow)`
    border: 1px solid lightgrey;
`

const MyTableRow = ({
    rowFields,
    id,
    isHeadCellsNumeric,
    checkAttributeGroup,
    clickEditAttributeGroup,
    isAttributeGroupChecked,
}) => {
    const labelId = `enhanced-table-checkbox-${id}`

    return (
        <RowStyled>
            <TableCell key={'checkbox'} padding="checkbox">
                <Checkbox
                    checked={isAttributeGroupChecked(id)}
                    onChange={checkAttributeGroup(id)}
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
                        align={isHeadCellsNumeric[index] ? 'right' : 'left'}
                        padding={'none'}
                    >
                        {rowFields[keyName]}
                    </TableCell>
                ))}
            <TableCell key={'editButton'} align={'center'} padding={'none'}>
                <IconButton onClick={clickEditAttributeGroup(id)}>
                    <EditIcon />
                </IconButton>
            </TableCell>
        </RowStyled>
    )
}

export default MyTableRow
