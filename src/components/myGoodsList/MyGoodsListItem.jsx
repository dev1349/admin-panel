import React from 'react'
import {Link} from 'react-router-dom'
import defaultImage from './no_image.png'
import {CellList, CellListItem, Img, Label, Td, Tr} from './styledComponents'
import EditButtonContainer from './editButton/EditButtonContainer'


const printCategory = (categorySet, printArray = []) => {
    if (categorySet.length > 0) {
        const newPrintArray = [...printArray]
        const stringItem = categorySet.reduce((stringItem, category) => stringItem + (stringItem && ' > ') + category.name, '')
        newPrintArray.push(stringItem)
        const newCategorySet = categorySet.slice(0, -1)

        return printCategory(newCategorySet, newPrintArray)
    }

    return [...printArray].reverse()
}


const MyGoodsListItem = ({good}) => {
    return (
        <Tr>
            <Td centered>
                <input
                    type={"checkbox"}
                />
            </Td>

            <Td centered>
                {!good.imageStatus && <Img src={defaultImage}/>}
            </Td>
            <Td>
                {good.name}
            </Td>
            <Td>
                {good.model}
            </Td>
            <Td centered>
                <CellList>
                    <CellListItem notActual>{good.price}</CellListItem>
                    <CellListItem actual>{good.salePrice}</CellListItem>
                </CellList>
            </Td>
            <Td>
                <CellList>

                    {printCategory(good.categorySet).map((item, index) => {
                        return (
                            <CellListItem key={index}>
                                {item}
                            </CellListItem>
                        )
                    })}

                </CellList>

            </Td>
            <Td centered>
                <Label attention={good.count <= 5}>
                    {good.count}
                </Label>
            </Td>
            <Td>
                {good.status ? 'Включенко' : 'Не включено'}
            </Td>

            <Td centered>
                <Link to={'/editGood'}>
                    <EditButtonContainer/>
                </Link>

            </Td>
        </Tr>
    )
}


export default MyGoodsListItem