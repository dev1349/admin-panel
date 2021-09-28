import {CategoriesList} from "./CategoriesList";
import {deleteCategory, getCategories, getSubcategories} from '../../reducers/categoryListReducer'
import React, {useState} from 'react'
import {connect} from "react-redux";
import {compose} from "@reduxjs/toolkit";
import {withRouter} from "react-router-dom";

const CategoriesListContainer = (props) => {

    const [draggingCategory, setDraggingCategory] = useState(null)
    const [currentCategory, setCurrentCategory] = useState(null)
    const [currentSubcategory, setCurrentSubcategory] = useState(null)

    return (
        props.categories &&
        <CategoriesList categories={props.categories}
                        getCategories={props.getCategories}
                        getSubcategories={props.getSubcategories}
                        setDraggingCategory={setDraggingCategory}
                        draggingCategory={draggingCategory}
                        match={props.match}
                        currentCategory={currentCategory}
                        setCurrentCategory={setCurrentCategory}
                        deleteCategory={props.deleteCategory}
                        currentSubcategory={currentSubcategory}
                        setCurrentSubcategory={setCurrentSubcategory}
        />
    )
}

const mapStateToProps = state => ({
    categories: state.categoriesList.categories
})

export default compose(connect(
        mapStateToProps,
        {getCategories, getSubcategories, deleteCategory}),
        withRouter)
(CategoriesListContainer)