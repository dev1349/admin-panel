import {
    DELETE_CATEGORY,
    SET_CATEGORIES,
} from '../actions/actionTypes'


const initialState = {
    categories: [
        {
            id: 1, name: 'Футболки', description: 'Описание',
            subcategories: [
                {id: 11, name: 'Детские', description: 'Описание'},
                {id: 12, name: 'Мужские', description: 'Описание'},
                {id: 13, name: 'Женские', description: 'Описание'}
            ]
        },
        {
            id: 2, name: 'Кроссовки', description: 'Описание',
            subcategories: [
                {id: 14, name: 'Кеды', description: 'Описание'},
                {id: 15, name: 'Летние', description: 'Описание'}
            ]
        },
        {
            id: 3, name: 'Брюки', description: 'Описание'
        },
        {
            id: 4, name: 'Шапки', description: 'Описание',
            subcategories: [
                {id: 16, name: 'Ушанки', description: 'Описание'}
            ]
        },
    ],
}


export function categoriesListReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            }
        case DELETE_CATEGORY:
            return {
                ...state,
                categories: state.categories.filter(c => c.id !== action.categoryId)
            }
        default:
            return state
    }
}

const transferSubcategory = (categories, currentCategory, currentSubcategory, subcategory) => {
    let result = new Map();
    let newArr = JSON.parse(JSON.stringify(currentCategory))
    const currentIndex = currentCategory.subcategories.indexOf(currentSubcategory)
    newArr.subcategories.splice(currentIndex, 1)
    const dropIndex = currentCategory.subcategories.indexOf(subcategory)
    newArr.subcategories.splice(dropIndex , 0, currentSubcategory)

    categories.map((c, index) => {
        if (c.id === currentCategory.id){
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
    newArr.splice(dropIndex , 0, currentCategory)
    newArr.map((c, index) => result.set(index, c))
    return Array.from(result.values());
};

export const setCategories = (categories) => ({type: SET_CATEGORIES, categories})
export const deleteCategory = (categoryId) => ({type: DELETE_CATEGORY, categoryId})

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