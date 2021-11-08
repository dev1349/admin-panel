import React from 'react'
import SimpleModal from '../../molecules/modals/simpleModal/SimpleModal'

const WSInfoModals = ({ fetchStatus, modalData }) => {
    const indexStatus = modalData.findIndex(
        el => el.fetchStatus === fetchStatus
    )
    const fetchStatusArray = modalData.map(el => el.fetchStatus)

    return (
        <SimpleModal
            modalText={modalData[indexStatus]?.modalProperties?.modalText}
            modalType={modalData[indexStatus]?.modalProperties?.modalType}
            action={modalData[indexStatus]?.modalProperties?.action}
            open={fetchStatusArray.includes(fetchStatus)}
            onClose={modalData[indexStatus]?.modalProperties?.action}
        />
    )
}

export default WSInfoModals
