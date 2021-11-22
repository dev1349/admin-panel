import React from 'react'
import MaxWidthTemplate from '../../templates/maxWidthTemplate/MaxWidthTemplate'
import PageHeaderWrapper from '../../atoms/pageHeaderWrapper/pageHeaderWrapper'
import PageHeader from '../../organisms/pageHeader/PageHeader'
import { getHeaderItemsConf } from '../../../reducers/headerSlice'
import { useSelector } from 'react-redux'

const PageHeaderPage = () => {
    const { logoItem, importExportItem, shopsItem, helpItem } =
        useSelector(getHeaderItemsConf)
    return (
        <PageHeaderWrapper>
            <MaxWidthTemplate>
                <PageHeader
                    onClickMenu={() => console.log('Click menu icon')}
                    logo={logoItem}
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
