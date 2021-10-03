import {categoriesListMockData} from "../mock/categoriesListMockData";
import {createSlice} from "@reduxjs/toolkit";

const categoriesListSlice = createSlice({
    name: "categoriesList",
    initialState: categoriesListMockData,
    reducers: {
        setCategories(state, action) {
            state.categories = action.payload
        },
        deleteCategory(state, action) {
            state.categories = state.categories.filter(c => c.id !== action.payload)
        }
    }
})


const transferSubcategory = (categories, currentCategory, currentSubcategory, subcategory) => {
    let result = new Map();
    let newArr = JSON.parse(JSON.stringify(currentCategory))
    const currentIndex = currentCategory.subcategories.indexOf(currentSubcategory)
    newArr.subcategories.splice(currentIndex, 1)
    const dropIndex = currentCategory.subcategories.indexOf(subcategory)
    newArr.subcategories.splice(dropIndex, 0, currentSubcategory)

    categories.map((c, index) => {
        if (c.id === currentCategory.id) {
            return result.set(index, newArr)
        }
        return result.set(index, c)
    })
    return Array.from(result.values());
};

const transferCategory = (categories, currentIndex, dropIndex, currentCategory) => {
    let result = new Map();
    let newArr = JSON.parse(JSON.stringify(categories))
    newArr.splice(currentIndex, 1)
    newArr.splice(dropIndex, 0, currentCategory)
    newArr.map((c, index) => result.set(index, c))
    return Array.from(result.values());
};

export const getCategories = (categories, currentCategory, category) =>
    (dispatch) => {
        let res = transferCategory(categories, categories.indexOf(currentCategory),
            categories.indexOf(category), currentCategory)
        dispatch(setCategories(res))
    }

export const getSubcategories = (categories, currentCategory, currentSubcategory, subcategory) =>
    (dispatch) => {
        let res = transferSubcategory(categories, currentCategory, currentSubcategory, subcategory)
        dispatch(setCategories(res))
    }


export default categoriesListSlice.reducer
export const {setCategories, deleteCategory} = categoriesListSlice.actions