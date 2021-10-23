import React from 'react'
import Header1 from '../../molecules/headers/header1/Header1'
import Header2 from '../../molecules/headers/header2/Header2'
import Wrapper from '../../atoms/wrapper/Wrapper'
import MaxWidthTemplate from '../../templates/maxWidthTemplate/MaxWidthTemplate'
import InfoModals from '../infoModals/InfoModals'

const AddEditDeleteWrapper = ({
    mode,
    header1Label,
    modeData,
    toAddGroup,
    returnToListMode,
    saveGroup,
    isSaveGroupButtonDisabled,
    deleteGroup,
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
                    toAddGroup={toAddGroup}
                    returnToListMode={returnToListMode}
                    saveGroup={saveGroup}
                    isSaveGroupButtonDisabled={isSaveGroupButtonDisabled}
                    deleteGroup={deleteGroup}
                    isDeleteButtonDisabled={isDeleteButtonDisabled}
                >
                    {header1Label}
                </Header1>
                <Header2 icon={modeData[mode]['icon']}>
                    {modeData[mode]['label']}
                </Header2>
                <Wrapper
                    displayedComponent={modeData[mode]['displayedComponent']}
                />
            </MaxWidthTemplate>
        </>
    )
}

export default AddEditDeleteWrapper
