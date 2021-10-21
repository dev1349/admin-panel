// eslint-disable-next-line no-undef
export const SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS
export const SERVER_PORT = '8077'
export const SERVER_PATH = SERVER_ADDRESS + ':' + SERVER_PORT

export const POST_GOOD_PATH = SERVER_PATH + '/api/postGood'
export const GET_GOOD_PATH = SERVER_PATH + '/api/getGood'
export const GET_ALL_GOOD_PATH = SERVER_PATH + '/api/getAllGood'
export const PUT_GOOD_PATH = SERVER_PATH + '/api/putGood'
export const DELETE_GOOD_PATH = SERVER_PATH + '/api/deleteGood'

export const POST_GOOD_TYPE_PATH = SERVER_PATH + '/api/postGoodType'
export const GET_GOOD_TYPE_PATH = SERVER_PATH + '/api/getGoodType'
export const GET_ALL_GOOD_TYPE_PATH = SERVER_PATH + '/api/getAllGoodType'
export const PUT_GOOD_TYPE_PATH = SERVER_PATH + '/api/putGoodType'
export const DELETE_GOOD_TYPE_PATH = SERVER_PATH + '/api/deleteGoodType'

export const POST_ATTRIBUTE_PATH = SERVER_PATH + '/api/postAttribute'
export const GET_ATTRIBUTE_PATH = SERVER_PATH + '/api/getAttribute'
export const GET_ALL_ATTRIBUTE_PATH = SERVER_PATH + '/api/getAllAttribute'
export const PUT_ATTRIBUTE_PATH = SERVER_PATH + '/api/putAttribute'
export const DELETE_ATTRIBUTE_PATH = SERVER_PATH + '/api/deleteAttribute'

export const POST_CATEGORY_PATH = SERVER_PATH + '/api/postCategory'

export const GET_ALL_ATTRIBUTE_GROUP_PATH =
    SERVER_PATH + '/api/getAllAttributeGroup'
export const POST_ATTRIBUTE_GROUP_PATH = SERVER_PATH + '/api/postAttributeGroup'
export const PUT_ATTRIBUTE_GROUP_PATH = SERVER_PATH + '/api/putAttributeGroup'
export const DELETE_ATTRIBUTE_GROUP_PATH =
    SERVER_PATH + '/api/deleteAttributeGroup'
