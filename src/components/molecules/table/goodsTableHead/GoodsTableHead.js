import React from 'react'
import { TableHead } from '@mui/material'
import TableCell from '../../../atoms/table/tableCell/TableCell'
import { TableRowStyled } from '../tableRow/TableRow'
import { useStyle } from '../../../../hooks/useStyle'
import GoodsTableHeadStyle from './GoodsTableHeadStyle'


const SimpleTableHeadWS = ({ headerCells }) => {
    const GoodsTableHeadStyled = useStyle('GoodsTableHeadStyled', TableHead, GoodsTableHeadStyle)
    //todo TableRowStyled
    return (
        <GoodsTableHeadStyled>
            <TableRowStyled>
                {headerCells.map(cell => (
                    <TableCell
                        key={cell.id}
                        align={
                            cell.numeric === undefined
                                ? 'center'
                                : cell.numeric
                                    ? 'right'
                                    : 'left'
                        }
                        padding={cell.disablePadding ? 'none' : 'normal'}
                    >
                        {cell.label}
                    </TableCell>
                ))}
                <TableCell key={'delete'} padding={'none'}/>
                <TableCell key={'change'} padding={'none'}/>
            </TableRowStyled>
        </GoodsTableHeadStyled>
    )
}

export default SimpleTableHeadWS
