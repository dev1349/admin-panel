import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import TableContainer from '../../../templates/tableContainerTemplate/TableContainerTemplate'
import { useGetNoveltiesQuery } from '../../../../reducers/novelitiesSlice'
import Loader from '../../../molecules/loader/Loader'
import { SERVER_PATH } from '../../../../api/apiConstants'

const columns = [
    {
        field: 'imgSrc',
        headerName: 'Фото',
        width: 200,
        renderCell: params => <img style={{ width: '70px' }} src={params.value} alt="img" />,
    },
    { field: 'name', headerName: 'Название', width: 300 },
    { field: 'aticle', headerName: 'Артикуль', width: 300 },
    { field: 'price', headerName: 'Цена', width: 70 },
]

const DataTable = () => {
    const noveltiesData = useGetNoveltiesQuery()

    const rows =
        noveltiesData.isSuccess &&
        noveltiesData.data.map(item => ({
            id: item.id,
            name: item.goodSimpleDto.name,
            price: item.goodSimpleDto.price,
            aticle: item.goodSimpleDto.goodState,
            imgSrc: SERVER_PATH + '/img/' + item.goodSimpleDto.hashIdImage,
        }))
    console.log(noveltiesData)

    return (
        <TableContainer>
            {(noveltiesData.isFetching || noveltiesData.isLoading) && <Loader />}
            {rows && (
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={7}
                    rowsPerPageOptions={[7]}
                    checkboxSelection
                    //onSelectionModelChange={}
                />
            )}
        </TableContainer>
    )
}
export default DataTable
