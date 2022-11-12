import React from 'react'
import MaxWidthTemplate from '../../templates/maxWidthTemplate/MaxWidthTemplate'
import DataTable from '../../organisms/tables/noveltiesTable/NoveltiesTable'
import ButtonsWrapperTempalte from '../../templates/buttonsWrapperTemplate/ButtonsWrapperTemplate'
import Button from '../../atoms/button/Button'
import TextField from '../../atoms/inputs/textField/TextField'
const NovelitiesPage = () => {
    return (
        <MaxWidthTemplate>
            <h2 style={{ padding: '20px' }}>Новинки</h2>
            <TextField clientSearch placeholder="Поиск по товарам" />
            <ButtonsWrapperTempalte>
                <Button>Добавить товар</Button>
                <Button>Добавить из категории</Button>
            </ButtonsWrapperTempalte>
            <DataTable />
        </MaxWidthTemplate>
    )
}
export default NovelitiesPage
