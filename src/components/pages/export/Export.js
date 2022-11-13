import React from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import ExportButton from '../../atoms/exportButton/ExportButton'

const someArray = []
for (let i = 1; i <= 12; i++) {
    someArray.push({
        name: `name ${i}`,
        surname: `surname ${i}`,
        address: `address ${i}`,
        count: `${i * 10}`,
    })
}

const tableHeader = ['Name', 'Surname', 'Address', 'Count']

const Export = () => {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align={'right'}>Number</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Surname</TableCell>
                            <TableCell align="left">Address</TableCell>
                            <TableCell align="right">Count</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {someArray.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row" align={'right'}>
                                    {index + 1}
                                </TableCell>
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="left">{row.surname}</TableCell>
                                <TableCell align="left">{row.address}</TableCell>
                                <TableCell align="right">{row.count}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <ExportButton tableList={someArray} fileName={'data'} tableHeader={tableHeader}>
                Експорт
            </ExportButton>
        </>
    )
}

export default Export
