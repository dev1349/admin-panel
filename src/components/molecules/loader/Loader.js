import React from 'react'
import LoaderWindowTemplate from '../../templates/loaderWindowTemplate/LoaderWindowTemplate'
import CircularProgress from '../../atoms/loader/circularProgress/CircularProgress'

const WSLoader = () => {
    return (
        <LoaderWindowTemplate>
            <CircularProgress />
        </LoaderWindowTemplate>
    )
}

export default WSLoader
