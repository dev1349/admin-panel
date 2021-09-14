import React from 'react'
import {connect} from 'react-redux'
import AddCategory from './AddCategory'
import {changeFetchStatus, postCategory, resetCategory, setCategoryAttributes} from '../../actions/addCategoryActions'


class AddCategoryContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            tabs: [
                {
                    id: 0,
                    title: 'Общие',
                },
                {
                    id: 1,
                    title: 'Дизайн',
                },
                {
                    id: 2,
                    title: 'Данные',
                }
            ],
            subTabs: [
                {
                    id: 0,
                    title: 'Russian'
                },
                {
                    id: 1,
                    title: 'English'
                }
            ],
            activeTabs: 0,
            activeSubTabs: 0
        }
    }

    tabTitleClickHandler = (tabId) => {
        this.setState({
            activeTabs: tabId
        })
    }

    subTabTitleClickHandler = (subTabId) => {
        this.setState({
            activeSubTabs: subTabId
        })
    }

    render() {
        return (
            <AddCategory
                tabs={this.state.tabs}
                subTabs={this.state.subTabs}
                activeTabs={this.state.activeTabs}
                activeSubTabs={this.state.activeSubTabs}
                onTabTitleClick={this.tabTitleClickHandler}
                onSubTabTitleClick={this.subTabTitleClickHandler}
                categoryFields={this.props.categoryFields}
                setCategoryAttributes={this.props.setCategoryAttributes}
                postCategory={this.props.postCategory}
                fetchStatus={this.props.fetchStatus}
                changeFetchStatus={this.props.changeFetchStatus}
                resetCategory={this.props.resetCategory}
                goBack={this.props.history.goBack}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        categoryFields: state.addCategory.categoryFields,
        fetchStatus: state.addCategory.fetchStatus
    }
}

const mapDispatchToProps = dispatch => ({
    setCategoryAttributes: (attribute) => {
        dispatch(setCategoryAttributes(attribute))
    },
    postCategory: () => {
        dispatch(postCategory())
    },
    changeFetchStatus: (status) => {
        dispatch(changeFetchStatus(status))
    },
    resetCategory: () => {
        dispatch(resetCategory())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddCategoryContainer)