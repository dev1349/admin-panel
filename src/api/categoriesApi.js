import { deleteRequestOptions, getRequestOptions, postRequestOptions, putRequestOptions } from './requestOptions'
import { CATEGORY_PATH } from './apiConstants'

export const getCategoryFetch = id => {
    return fetch(CATEGORY_PATH + `/${id}`, getRequestOptions()).then(response => {
        if (!response.ok) {
            throw new Error(response)
        }
        return response.json()
    })
}

export const getAllCategoriesFetch = () => {
    return fetch(CATEGORY_PATH, getRequestOptions()).then(response => response.json())
}

export const postCategoryFetch = categoryAttr => {
    return fetch(CATEGORY_PATH, postRequestOptions(categoryAttr)).then(response => response.json())
}

export const putCategoryFetch = categoryAttr => {
    return fetch(CATEGORY_PATH + `/${categoryAttr.id}`, putRequestOptions(categoryAttr))
}

export const deleteCategoryFetch = categoryId => {
    return fetch(CATEGORY_PATH + `/${categoryId}`, deleteRequestOptions())
}
