import React from 'react'
import { TableHead } from '@mui/material'
import TableCell from '../../../atoms/table/tableCell/TableCell'
import { TableRowStyled } from '../tableRow/TableRow'
import { useStyle } from '../../../../hooks/useStyle'
import SimpleTableHeadStyle from './SimpleTableHeadStyle'


const SimpleTableHeadWS = ({ headerCells }) => {
    const SimpleTableHeadStyled = useStyle('SimpleTableHeadStyled', TableHead, SimpleTableHeadStyle)
    return (
        <SimpleTableHeadStyled>
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
                <TableCell key={'delete'} padding={'none'} />
            </TableRowStyled>
        </SimpleTableHeadStyled>
    )
}

export default SimpleTableHeadWS
