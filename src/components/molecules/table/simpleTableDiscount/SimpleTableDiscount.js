import React from 'react'
import TableCell from '../../../atoms/table/tableCell/TableCell'
import TableRow from '../../../atoms/table/tableRow/TableRow'
import DeleteIcon from '../../../atoms/icons/deleteIcon/DeleteIcon'
import IconButton from '../../buttons/iconButton/IconButton'

const SimpleTableDiscount = ({ discount, deleteDiscount, discountSum }) => {
    return (
        <TableRow>
            <TableCell />
            <TableCell align={'right'}>Скидка</TableCell>
            <TableCell align={'left'}>{discount.comment}</TableCell>
            <TableCell align={'right'}>
                {`${discount.value} ${discount.type}`}
            </TableCell>
            <TableCell />
            <TableCell />
            <TableCell align={'right'}>{`${discountSum} грн.`}</TableCell>
            <TableCell align={'center'}>
                <IconButton onClick={deleteDiscount}>
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    )
}

export default SimpleTableDiscount
