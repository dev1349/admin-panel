import React from 'react'
import stokList from "../../../../mock/stokList"
import ContainerStock from "../ContainerStock/ContainerStock"
import CardStock from "../../../molecules/cardStock/CardStock"

class List {
    get cardList() {
        const arr = stokList.map((elem, index) => {
            return (
                <ContainerStock key={index}>
                    {
                        elem.map((elem, index) => {
                            return (
                                <CardStock
                                    key={index}
                                    title={elem.title}
                                    url={elem.url}
                                    timer={elem.timer}
                                    daysStock={elem.daysStock}
                                />
                            )
                        })
                    }
                </ContainerStock>
            )
        })
        return arr
    }
}
export default List
