import React from 'react'
import MaxWidthTemplate from '../../templates/maxWidthTemplate/MaxWidthTemplate'
import DataTable from '../../organisms/tables/noveltiesTable/NoveltiesTable'
import ButtonsWrapperTempalte from '../../templates/buttonsWrapperTemplate/ButtonsWrapperTemplate'
import Link from '../../atoms/link/Link'
const NovelitiesPage = () => {
    return (
        <MaxWidthTemplate>
            <h2 style={{ padding: '20px' }}>Новинки</h2>
            <ButtonsWrapperTempalte>
                <Link>Добавить товар</Link>
                <Link>Добавить из категории</Link>
            </ButtonsWrapperTempalte>
            <DataTable />
        </MaxWidthTemplate>
    )
}
export default NovelitiesPage
