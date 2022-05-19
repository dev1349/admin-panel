import React from 'react'
import LoaderWindowTemplate from '../../templates/loaderWindowTemplate/LoaderWindowTemplate'
import CircularProgress from '../../atoms/loader/circularProgress/CircularProgress'

const Loader = props => {
    return (
        <LoaderWindowTemplate>
            <CircularProgress {...props} />
        </LoaderWindowTemplate>
    )
}

export default Loader
