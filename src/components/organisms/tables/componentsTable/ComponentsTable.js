import React from 'react'
import Table from '../../../atoms/table/table/Table'
import AtomTableHead from '../../../atoms/table/atomTableHead/AtomTableHead'
import AtomTableRow from '../../../atoms/table/atomTableRow/AtomTableRow'
import TableCell from '../../../atoms/table/tableCell/TableCell'
import TableBody from '../../../atoms/table/tableBody/TableBody'
import { Link as RouterLink } from 'react-router-dom'
import ListIcon from '../../../atoms/icons/listIcon/ListIcon'
import Header2 from '../../../molecules/headers/header2/Header2'
import Link from '../../../atoms/link/Link'

const ComponentsTable = ({ tableHeader, tableRows }) => {
    return (
        <>
            <Header2 icon={<ListIcon />}>Компоненты для админки</Header2>
            <Table aria-label="simple table">
                <AtomTableHead>
                    <AtomTableRow>
                        {tableHeader.map(cell => {
                            return (
                                <TableCell key={cell.id} align={cell.align}>
                                    {cell.label}
                                </TableCell>
                            )
                        })}
                    </AtomTableRow>
                </AtomTableHead>
                <TableBody>
                    {tableRows.map((row, index) => {
                        return (
                            <AtomTableRow key={index}>
                                <TableCell align={'right'}>
                                    {index + 1}
                                </TableCell>
                                <TableCell>{row.componentName}</TableCell>
                                <TableCell>{row.task}</TableCell>
                                <TableCell>
                                    {row.routeLink ? (
                                        <Link
                                            component={RouterLink}
                                            to={row.routeLink}
                                            color="inherit"
                                            underline="none"
                                            hoverUnderline
                                        >
                                            {row.routeText}
                                        </Link>
                                    ) : (
                                        row.routeText
                                    )}
                                </TableCell>
                            </AtomTableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </>
    )
}

export default ComponentsTable
