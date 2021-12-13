import React from 'react'
import MaxWidthTemplate from '../../templates/maxWidthTemplate/MaxWidthTemplate'
import PageHeaderWrapper from '../../atoms/pageHeaderWrapper/pageHeaderWrapper'
import PageHeader from '../../organisms/pageHeader/PageHeader'
import { getHeaderItemsConf } from '../../../reducers/headerSlice'
import { useSelector } from 'react-redux'
import { getStatisticsItems } from '../../../reducers/statisticsSlice'

const PageHeaderPage = () => {
    const { logoItem, importExportItem, shopsItem, helpItem } =
        useSelector(getHeaderItemsConf)
    const statisticsProps = useSelector(getStatisticsItems)
    return (
        <PageHeaderWrapper>
            <MaxWidthTemplate>
                <PageHeader
                    logo={logoItem}
                    statisticsProps={statisticsProps}
                    importExportProps={importExportItem}
                    shopsProps={shopsItem}
                    helpProps={helpItem}
                    onClickLogout={() => console.log('logout')}
                />
            </MaxWidthTemplate>
        </PageHeaderWrapper>
    )
}

export default PageHeaderPage
