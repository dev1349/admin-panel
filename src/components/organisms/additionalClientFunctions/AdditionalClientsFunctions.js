import React, { useState } from 'react'
import Checkbox from '../../atoms/inputs/checkbox/Checkbox'
import SimpleButton from '../../atoms/simpleButton/SimpleButton'
import AddIcon from '../../atoms/icons/addIcon/AddIcon'
import ClientFunctionContainerTemplate from '../../templates/clientFunctionContainerTemplate/ClientFunctionContainerTemplate'
import SpaceBetweenClientButtonGroupsTemplate from '../../templates/spaceBetweenClientButtonGroupsTemplate/SpaceBetweenClientButtonGroupsTemplate'
import ClientButtonsTemplate from '../../templates/spaceBetweenClientButtonsTemplate/SpaceBetweenClientButtonsTemplate'
import TextField from '../../molecules/inputs/textField/TextField'
import SearchIcon from '../../atoms/icons/searchIcon/SearchIcon'
import DeleteIcon from '../../atoms/icons/deleteIcon/DeleteIcon'
import IconButton from '../../molecules/buttons/iconButton/IconButton'
import { useHistory } from 'react-router-dom'
import ExportButton from '../../atoms/exportButton/ExportButton'

const AdditionalClientFunctions = ({
    allSelectedClientsChecked,
    allSelectedClientsIndeterminate,
    onChangeAllSelectedClients,
    isSelectedClients,
    createNewClientLink,
    clients,
}) => {
    const [searchFieldValue, setSearchFieldValue] = useState(null)

    const handleSetSearchFieldValue = payload => {
        setSearchFieldValue(payload[Object.keys(payload)[0]])
    }

    const history = useHistory()

    const handleCreateNewClient = () => history.push(createNewClientLink)

    return (
        <ClientFunctionContainerTemplate>
            <SpaceBetweenClientButtonGroupsTemplate>
                <ClientButtonsTemplate>
                    <Checkbox
                        size={'small'}
                        forTable
                        checked={allSelectedClientsChecked}
                        indeterminate={allSelectedClientsIndeterminate}
                        onChange={onChangeAllSelectedClients}
                    />
                    <SimpleButton startIcon={<AddIcon />} size={'small'} variant="outlined" noUppercase onClick={handleCreateNewClient}>
                        Клиент
                    </SimpleButton>
                    <ExportButton tableList={clients} fileName={'clients-data'} size={'small'} variant="outlined" noUppercase>
                        Експорт
                    </ExportButton>
                </ClientButtonsTemplate>
                <ClientButtonsTemplate>
                    <TextField
                        name={'clientSearch'}
                        value={searchFieldValue}
                        onChange={handleSetSearchFieldValue}
                        placeholder={'Поиск по имени, телефону и email-у'}
                        clientSearch
                    />
                    <SimpleButton startIcon={<SearchIcon />} size={'small'} variant="contained" noUppercase>
                        Найти
                    </SimpleButton>
                    {isSelectedClients && (
                        <IconButton size={'small'}>
                            <DeleteIcon fontSize={'small'} />
                        </IconButton>
                    )}
                </ClientButtonsTemplate>
            </SpaceBetweenClientButtonGroupsTemplate>
        </ClientFunctionContainerTemplate>
    )
}

export default AdditionalClientFunctions
