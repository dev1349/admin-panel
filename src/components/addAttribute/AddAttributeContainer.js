import React, { useEffect } from 'react'
import AttributesHeaderContainer from '../attributeHeader/AttributeHeaderContainer'
import {
    changeAddAttributeFields,
    postAttribute,
} from '../../actions/attributeActions'
import { AddAttribute } from './addAttribute'
import SaveAttributeButtonContainer from '../attributeHeader/SaveAttributeButton/SaveAttributeButtonContainer'
import BackAttributeButtonContainer from '../attributeHeader/BackAttributeButton/BackAttributeButtonContainer'
import { useDispatch, useSelector } from 'react-redux'
import { getAllAttributeGroup } from '../../reducers/attributeGroupSlice'

const AddAttributeContainer = props => {
    const dispatch = useDispatch()
    const attributeItem = useSelector(state => state.attributes.attributeItem)
    const attributeGroup = useSelector(
        state => state.attributeGroup.attributeGroupItems
    )
    useEffect(() => {
        dispatch(getAllAttributeGroup())
    }, [dispatch])
    const handleSetAttribute = data => {
        dispatch(changeAddAttributeFields(data))
    }

    const handleSubmit = () => {
        dispatch(postAttribute(attributeItem))
        props.showList()
    }

    return (
        <div>
            <AttributesHeaderContainer
                className={props.className}
                firstButton={
                    <SaveAttributeButtonContainer setSubmit={handleSubmit} />
                }
                secondButton={
                    <BackAttributeButtonContainer showList={props.showList} />
                }
                title={'Добавление атрибута'}
                showComp={props.showComp}
            />
            <AddAttribute
                attributeGroup={attributeGroup}
                prevData={attributeItem}
                postAttribute={handleSetAttribute}
                setSubmit={handleSubmit}
                className={props.className}
                showComp={props.showComp}
            />
        </div>
    )
}

export default AddAttributeContainer
