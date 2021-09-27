import React from 'react'
import {connect} from 'react-redux'
import Buttons from './Buttons'
import {
    removeSelectedAttributesGroup,
    saveGroup,
    switchMode
} from '../../../actions/attributeGroupActions'


class ButtonsContainer extends React.Component {
    render() {
        return (
            <Buttons
                attributeGroupMode={this.props.attributeGroupMode}
                isButtonDisabled={this.props.isButtonDisabled}
                changeAttributeGroupMode={this.props.changeAttributeGroupMode}
                removeSelectedAttributesGroup={this.props.removeSelectedAttributesGroup}
                saveAttributeGroup={this.props.saveAttributeGroup}
            />
        )
    }
}


const mapStateToProps = state => {
    return {
        attributeGroupMode: state.attributeGroup.attributeGroupMode,
        isButtonDisabled: state.attributeGroup.fetchStatus !== 'idle',
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeAttributeGroupMode: (mode) => {
            dispatch(switchMode(mode))
        },
        removeSelectedAttributesGroup: () => {
            dispatch(removeSelectedAttributesGroup())
        },
        saveAttributeGroup: () => {
            dispatch(saveGroup())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsContainer)