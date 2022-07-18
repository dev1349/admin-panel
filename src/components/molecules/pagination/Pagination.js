import React, { useEffect, useState } from 'react'
import Pagination from '../../atoms/pagination/Pagination'
import { useHistory, useParams } from 'react-router-dom'
import { createStyled } from '../../../services/style/createStyled'

const PaginationContainerStyled = createStyled('PaginationContainerStyle', 'div')

const PaginationMolecule = ({ pathName, count, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1)

    const history = useHistory()
    const handleSetCurrentPage = (event, newCurrentPage) => {
        setCurrentPage(newCurrentPage)
        history.push(`${pathName}/${newCurrentPage}`)
    }

    const { id } = useParams()
    useEffect(() => {
        if (id && parseInt(id) && parseInt(id) > 0) {
            if (parseInt(id) > count) {
                setCurrentPage(count)
                history.push(`${pathName}/${count}`)
            } else {
                setCurrentPage(parseInt(id))
            }
        }
    }, [pathName, id, setCurrentPage, count])

    return (
        <PaginationContainerStyled>
            <Pagination
                count={count}
                variant={'outlined'}
                shape={'rounded'}
                size={'small'}
                {...rest}
                page={currentPage}
                onChange={handleSetCurrentPage}
            />
        </PaginationContainerStyled>
    )
}

export default PaginationMolecule
