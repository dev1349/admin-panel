import React from 'react'
import { Th, Tr } from './styledComponents'
import SortingButtonContainer from './sortingButton/SortingButtonContainer'

const ColumnsTitle = ({ columnsTitle }) => {
    return (
        <Tr>
            <Th centered>
                <input type={'checkbox'} />
            </Th>

            {columnsTitle.map(({ id, title, sorting, name }) => {
                return (
                    <Th key={id}>
                        {sorting ? (
                            <SortingButtonContainer title={title} name={name} />
                        ) : (
                            title
                        )}
                    </Th>
                )
            })}
        </Tr>
    )
}

export default ColumnsTitle
