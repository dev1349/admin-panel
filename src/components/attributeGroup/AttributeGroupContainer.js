import React, {useEffect} from 'react'
import AttributeGroup from './AttributeGroup'
import {useDispatch, useSelector} from 'react-redux'
import {getAllAttributeGroup, getAttributeGroupMode} from '../../reducers/attributeGroupSlice'


const AttributeGroupContainer = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllAttributeGroup())
    }, [dispatch])

    const attributeGroupMode = useSelector(getAttributeGroupMode)

    return (
        <AttributeGroup
            attributeGroupMode={attributeGroupMode}
        />
    )
}


export default AttributeGroupContainer