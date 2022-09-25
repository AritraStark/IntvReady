import {
    LOGIN_INIT,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SIGNUP_INIT,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    GET_USER_DETAILS_INIT,
    GET_USER_DETAILS_SUCCESS,
    GET_USER_DETAILS_FAIL,
    DELETE_USER_INIT,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
    EDIT_USER_INIT,
    EDIT_USER_SUCCESS,
    EDIT_USER_FAIL
} from '../constants/userConstants.js'

export const loginReducer = (state = {}, action) => {
    switch(action.type){
        case LOGIN_INIT:
            return {
                loading: true,
                success:false
            }
        case LOGIN_SUCCESS:
            return{
                loading: false,
                userDetails: action.payload,
                success: true
            }
        case LOGIN_FAIL:
            return{
                success: false,
                loading: false,
                error: action.payload,
            }
        case LOGOUT:
            return{
                loading:false,
                success:false
            }
        default:
            return state
    }
}

export const signupReducer = (state = {}, action) => {
    switch(action.type){
        case SIGNUP_INIT:
            return {
                loading: true,
                success:false
            }
        case SIGNUP_SUCCESS:
            return{
                loading: false,
                userDetails: action.payload,
                success: true
            }
        case SIGNUP_FAIL:
            return{
                loading: false,
                error: action.payload,
                success: false
            }
        default:
            return state
    }
}

export const getUserDetailsReducer = (state = {userDetails:{}}, action) => {
    switch(action.type){
        case GET_USER_DETAILS_INIT:
            return {
                loading: true,
                success:false
            }
        case GET_USER_DETAILS_SUCCESS:
            return{
                loading: false,
                userDetails: action.payload,
                success: true
            }
        case GET_USER_DETAILS_FAIL:
            return{
                loading: false,
                error: action.payload,
                success: false
            }
        default:
            return state
    }
}

export const deleteUserReducer = (state = {}, action) => {
    switch(action.type){
        case DELETE_USER_INIT:
            return {
                loading: true,
                success:false
            }
        case DELETE_USER_SUCCESS:
            return{
                loading: false,
                success: true
            }
        case DELETE_USER_FAIL:
            return{
                loading: false,
                error: action.payload,
                success: false
            }
        default:
            return state
    }
}

export const updateUserReducer = (state = {userDetails:{}}, action) => {
    switch(action.type){
        case EDIT_USER_INIT:
            return {
                loading: true,
                success:false
            }
        case EDIT_USER_SUCCESS:
            return{
                loading: false,
                userDetails: action.payload,
                success: true
            }
        case EDIT_USER_FAIL:
            return{
                loading: false,
                error: action.payload,
                success: false
            }
        default:
            return state
    }
}