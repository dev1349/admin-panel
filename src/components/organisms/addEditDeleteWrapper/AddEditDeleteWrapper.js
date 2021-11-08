import React from 'react'
import Header1 from '../../molecules/headers/header1/Header1'
import Header2 from '../../molecules/headers/header2/Header2'
import GreyBorderedWrapperForComponent from '../../molecules/wrappers/greyBorderedWrapperForComponent/GreyBorderedWrapperForComponent'
import MaxWidthTemplate from '../../templates/maxWidthTemplate/MaxWidthTemplate'
import InfoModals from '../infoModals/InfoModals'

const AddEditDeleteWrapper = ({
    mode,
    header1Label,
    modeData,
    toAdd,
    toReturn,
    toSave,
    isAllButtonDisabled,
    isSaveButtonDisabled,
    toDelete,
    isDeleteButtonDisabled,
    fetchStatus,
    modalData,
}) => {
    return (
        <>
            <InfoModals fetchStatus={fetchStatus} modalData={modalData} />
            <MaxWidthTemplate>
                <Header1
                    mode={mode}
                    toAdd={toAdd}
                    toReturn={toReturn}
                    isAllButtonDisabled={isAllButtonDisabled}
                    toSave={toSave}
                    isSaveButtonDisabled={isSaveButtonDisabled}
                    toDelete={toDelete}
                    isDeleteButtonDisabled={isDeleteButtonDisabled}
                >
                    {header1Label}
                </Header1>
                <Header2 icon={modeData[mode]['icon']}>
                    {modeData[mode]['label']}
                </Header2>
                <GreyBorderedWrapperForComponent
                    displayedComponent={modeData[mode]['displayedComponent']}
                />
            </MaxWidthTemplate>
        </>
    )
}

export default AddEditDeleteWrapper
