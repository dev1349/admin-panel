import { postRequestOptions } from './requestOptions'
import { POST_CATEGORY_PATH } from './apiConstants'

export const postCategoryFetch = categoryAttr => {
    return fetch(POST_CATEGORY_PATH, postRequestOptions(categoryAttr))
}
