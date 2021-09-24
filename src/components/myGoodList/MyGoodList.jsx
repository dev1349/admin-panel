import React from 'react'
import ColumnsTitle from './ColumnsTitle'
import MyGoodListItem from './MyGoodListItem'
import {Container, Table, Tbody, Thead} from './styledComponents'


const MyGoodList = ({allGood, columnsTitle, sortingStatus}) => {

    return (
        <Container>
            <Table>
                <Thead>
                    <ColumnsTitle
                        columnsTitle={columnsTitle}
                        sortingStatus={sortingStatus}
                    />
                </Thead>
                <Tbody>

                    {allGood.map((good) => (
                            <MyGoodListItem
                                key={good.id}
                                good={good}
                            />
                        )
                    )}

                </Tbody>
            </Table>
        </Container>

    )
}


export default MyGoodList