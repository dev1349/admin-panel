import React, { useEffect } from 'react'
import { Table, TableBody } from '@mui/material'
import TableRow from '../../atoms/table/tableRow/TableRow'
import TableCell from '../../atoms/table/tableCell/TableCell'
import H1 from '../../atoms/textElements/headers/H1/H1'
import PaddingTemplate from '../../templates/paddingTemplate/PaddingTemplate'
import EditIcon from '../../atoms/icons/editIcon/EditIcon'
import ClearIcon from '../../atoms/icons/clearIcon/ClearIcon'
import {
    getAllUsers,
    deleteUserSuccess,
    getAllUsersData,
} from '../../../reducers/usersSlice'
import { useSelector, useDispatch } from 'react-redux'
import SimpleButton from '../../atoms/simpleButton/SimpleButton'
import IconButton from '../../molecules/buttons/iconButton/IconButton'
import { useHistory } from 'react-router-dom'

const UsersTable = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllUsersData())
    }, [dispatch])
    const usersList = useSelector(getAllUsers)

    let history = useHistory()
    const editRedirect = id => () => {
        history.push(`/users/edit/${id}`)
    }
    const addUserRedirect = () => {
        history.push(`/users/create`)
    }
    const deleteUserById = id => () => {
        dispatch(deleteUserSuccess(id))
    }
    const users = usersList.map(e => (
        <TableRow key={usersList.indexOf(e)} default={true}>
            <TableCell>{e.firstName}</TableCell>
            <TableCell>{e.email}</TableCell>
            <TableCell>{e.isBlocked ? 'Заблокирован' : 'Нет'}</TableCell>
            <TableCell align="right">
                <IconButton onClick={editRedirect(usersList.indexOf(e))}>
                    <EditIcon />
                </IconButton>
                <IconButton onClick={deleteUserById(usersList.indexOf(e))}>
                    <ClearIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    ))
    return (
        <PaddingTemplate>
            <H1 fs={true}>Пользователи</H1>
            <Table>
                <TableBody>
                    <TableRow defaultHeading={true}>
                        <TableCell>Имя</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Заблокирован</TableCell>
                        <TableCell> </TableCell>
                    </TableRow>
                    {users}
                </TableBody>
            </Table>
            <PaddingTemplate>
                <SimpleButton onClick={addUserRedirect}>Добавить</SimpleButton>
            </PaddingTemplate>
        </PaddingTemplate>
    )
}

export default UsersTable
