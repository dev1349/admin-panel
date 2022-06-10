import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import DeleteIcon from '../../../atoms/icons/deleteIcon/DeleteIcon'
import { deleteProduct } from '../../../../reducers/novelitiesSlice'
import { useSelector, useDispatch } from 'react-redux'
import TableContainer from '../../../templates/tableContainerTemplate/TableContainerTemplate'

const columns = [
    {
        field: 'imgSrc',
        headerName: 'Фото',
        width: 200,
        renderCell: params => <img style={{ width: '70px' }} src={params.value} />,
    },
    { field: 'name', headerName: 'Название', width: 300 },
    { field: 'aticle', headerName: 'Артикуль', width: 300 },
    { field: 'price', headerName: 'Цена', width: 70 },
]

const DataTable = () => {
    const [selected, setSelected] = useState(false)
    const [selectedRows, setSelectedRows] = useState()

    const rows = useSelector(state => state.novelities)
    const dispatch = useDispatch()

    const selectionHandler = selectedItems => {
        selectedItems.length > 0 ? setSelected(true) || setSelectedRows(selectedItems) : setSelected(false) || setSelectedRows([])
    }

    return (
        <TableContainer>
            {selected && (
                <a
                    href="#"
                    onClick={e => {
                        e.preventDefault()
                        dispatch(deleteProduct(selectedRows))
                    }}
                >
                    <DeleteIcon red />
                </a>
            )}
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={7}
                rowsPerPageOptions={[7]}
                checkboxSelection
                onSelectionModelChange={selectionHandler}
            />
        </TableContainer>
    )
}
export default DataTable
