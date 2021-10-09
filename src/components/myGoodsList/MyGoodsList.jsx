import React from 'react'
import ColumnsTitle from './ColumnsTitle'
import MyGoodsListItem from './MyGoodsListItem'
import {Container, Table, Tbody, Thead} from './styledComponents'


const MyGoodsList = ({allGoods, columnsTitle, sortingStatus}) => {

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

                    {allGoods.map((good) => (
                            <MyGoodsListItem
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


export default MyGoodsList