import React from 'react'
import PageHeader from '../../organisms/pageHeader/PageHeader'
import { getHeaderItemsConf } from '../../../reducers/headerSlice'
import { useSelector } from 'react-redux'
import { getStatisticsItems } from '../../../reducers/statisticsSlice'
import { useTranslation } from 'react-i18next'

const PageHeaderPage = () => {
    const { logoItem, importExportItem, shopsItem, helpItem } = useSelector(getHeaderItemsConf)

    const statisticsProps = useSelector(getStatisticsItems)

    const { i18n } = useTranslation()

    return (
        <PageHeader
            logo={logoItem}
            statisticsProps={statisticsProps}
            importExportProps={importExportItem}
            shopsProps={shopsItem}
            helpProps={helpItem}
            onClickLogout={() => console.log('logout')}
            i18n={i18n}
        />
    )
}

export default PageHeaderPage
