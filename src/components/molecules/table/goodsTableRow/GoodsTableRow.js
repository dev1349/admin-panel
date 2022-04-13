import React from 'react'
import { TableRow } from '@mui/material'
import TableCell from '../../../atoms/table/tableCell/TableCell'
import IconButton from '../../buttons/iconButton/IconButton'
import DeleteIcon from '../../../atoms/icons/deleteIcon/DeleteIcon'
import EditIcon from '../../../atoms/icons/editIcon/EditIcon'
import { useStyle } from '../../../../hooks/useStyle'
import GoodsTableRowStyle from './GoodsTableRowStyle'


const SimpleTableRow = ({ rowValues, cellsTypes, deleteGood, changeGood }) => {
    const GoodsTableRowStyled = useStyle('GoodsTableRowStyled', TableRow, GoodsTableRowStyle)

    const handleDeleteGood = () => {
        deleteGood(rowValues)
    }
    const handleChangeGood = () => {
        changeGood(rowValues)
    }

    return (
        <GoodsTableRowStyled>
            {Object.keys(rowValues)
                .slice(1)
                .map((el, index) => {
                    return (
                        <TableCell
                            key={el}
                            align={
                                cellsTypes[index] === undefined
                                    ? 'center'
                                    : cellsTypes[index]
                                    ? 'right'
                                    : 'left'
                            }
                        >
                            {rowValues[el]}
                        </TableCell>
                    )
                })}
            <TableCell key={'deleteGoods'} align={'center'} padding={'none'}>
                <IconButton onClick={handleDeleteGood}>
                    <DeleteIcon />
                </IconButton>
            </TableCell>
            <TableCell key={'changeGoods'} align={'center'} padding={'none'}>
                <IconButton onClick={handleChangeGood}>
                    <EditIcon />
                </IconButton>
            </TableCell>
        </GoodsTableRowStyled>
    )
}

export default SimpleTableRow
