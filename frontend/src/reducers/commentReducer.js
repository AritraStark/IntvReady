import { CREATE_COMMENT_FAIL, CREATE_COMMENT_INIT, CREATE_COMMENT_SUCCESS, DELETE_COMMENT_FAIL, DELETE_COMMENT_INIT, DELETE_COMMENT_SUCCESS, GET_POST_COMMENTS_FAIL, GET_POST_COMMENTS_INIT, GET_POST_COMMENTS_SUCCESS, UPDATE_COMMENT_FAIL, UPDATE_COMMENT_INIT, UPDATE_COMMENT_SUCCESS } from "../constants/commentConstants"

export const createCommentReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_COMMENT_INIT:
            return {
                loading: true,
                success:false
            }
        case CREATE_COMMENT_SUCCESS:
            return {
                loading: false,
                comments: action.payload,
                success:true
            }
        case CREATE_COMMENT_FAIL:
            return {
                loading: false,
                error: action.payload,
                success:false
            }
        default:
            return state
    }
}

export const getCommentsReducer = (state = { }, action) => {
    switch (action.type) {
        case GET_POST_COMMENTS_INIT:
            return {
                loading: true,
                success:false
            }
        case GET_POST_COMMENTS_SUCCESS:
            return {
                loading: false,
                comments: action.payload,
                success:true
            }
        case GET_POST_COMMENTS_FAIL:
            return {
                loading: false,
                error: action.payload,
                success:false
            }
        default:
            return state
    }
}

export const updateCommentReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_COMMENT_INIT:
            return {
                loading: true,
                success:false
            }
        case UPDATE_COMMENT_SUCCESS:
            return {
                loading: false,
                comments: action.payload,
                success:true
            }
        case UPDATE_COMMENT_FAIL:
            return {
                loading: false,
                error: action.payload,
                success:false
            }
        default:
            return state
    }
}

export const deleteCommentReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_COMMENT_INIT:
            return {
                loading: true,
                success:false
            }
        case DELETE_COMMENT_SUCCESS:
            return {
                loading: false,
                success:true
            }
        case DELETE_COMMENT_FAIL:
            return {
                loading: false,
                error: action.payload,
                success:false
            }
        default:
            return state
    }
}