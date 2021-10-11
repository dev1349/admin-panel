import {useDispatch, useSelector} from 'react-redux'
import React, {useEffect} from 'react'
import {changeAddAttributeFields, saveEditAttribute} from '../../actions/attributeActions'
import AttributesHeaderContainer from '../attributeHeader/AttributeHeaderContainer'
import SaveAttributeButtonContainer from '../attributeHeader/SaveAttributeButton/SaveAttributeButtonContainer'
import BackAttributeButtonContainer from '../attributeHeader/BackAttributeButton/BackAttributeButtonContainer'
import {AddAttribute} from '../addAttribute/addAttribute'
import {getAllAttributeGroup} from '../../reducers/attributeGroupSlice'

const EditAttributeContainer = (props) => {
    const dispatch = useDispatch()
    const editItem = useSelector(state => state.attributes.attributeItem)
    const attributeGroup = useSelector(state => state.attributeGroup.attributeGroupItems)
    useEffect(()=>{
        dispatch(getAllAttributeGroup())
    }, [dispatch])
    const handleSetAttribute = (data) => {
        dispatch(changeAddAttributeFields(data))
    }

    const handleSubmit = () => {
        dispatch(saveEditAttribute())
        props.showList()
    }

    return(
        <div>
            <AttributesHeaderContainer
                className={props.className}
                firstButton={<SaveAttributeButtonContainer setSubmit={handleSubmit}/>}
                secondButton={<BackAttributeButtonContainer showList={props.showList}/>}
                title={"Изменение атрибута"}
                showComp={props.showComp}
            />
            <AddAttribute
                attributeGroup={attributeGroup}
                prevData={editItem}
                postAttribute={handleSetAttribute}
                setSubmit={handleSubmit}
                className={props.className}
                showComp={props.showComp}
            />

        </div>
    )

}

export default EditAttributeContainer;