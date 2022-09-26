import axios from 'axios'
import { DELETE_USER_FAIL, DELETE_USER_INIT, DELETE_USER_SUCCESS, EDIT_USER_FAIL, EDIT_USER_INIT, EDIT_USER_SUCCESS, GET_USER_DETAILS_FAIL, GET_USER_DETAILS_INIT, GET_USER_DETAILS_SUCCESS, LOGIN_FAIL, LOGIN_INIT, LOGIN_SUCCESS, LOGOUT, SIGNUP_FAIL, SIGNUP_INIT, SIGNUP_SUCCESS } from '../constants/userConstants.js'

export const login = (email,password) => async(dispatch) => {
    try {
        //The login action is initiated and the action is dispatched here
        dispatch({
            type: LOGIN_INIT
        })

        //Config for the post to api
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }

        //Handling the post action and getting user data
        const {data} = await axios.post(
            '/api/users/login',
            {email,password},
            config
        )
        
        //Setting user data into the local cache 
        localStorage.setItem('userDetails',JSON.stringify(data))

        //If the data is fetched properly then the login is success and the data is assigned to the payload
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        })

    } catch (error) {
        //Accessing the error and initiating the login error action and assigning the error as a payload
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        })
    }
}

export const getUserDetails = (id) => async(dispatch,getState) => {
    try {
        //The login action is initiated and the action is dispatched here
        dispatch({
            type: GET_USER_DETAILS_INIT
        })

        const {
            login:{userDetails}
        } = getState()

        //Config for the post to api
        const config = {
            headers:{
                'Content-type':'application/json',
                'x-auth': userDetails.token
            }
        }

        //Handling the post action and getting user data
        const {data} = await axios.get(
            `/api/users/${id}`,
            config
        )

        //If the data is fetched properly then the login is success and the data is assigned to the payload
        dispatch({
            type: GET_USER_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        //Accessing the error and initiating the login error action and assigning the error as a payload
        dispatch({
            type: GET_USER_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        })
    }
}

export const signup = (name,email,description,password,url) => async(dispatch) => {
    try {
        //The login action is initiated and the action is dispatched here
        dispatch({
            type: SIGNUP_INIT
        })

        //Config for the post to api
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }

        //Handling the post action and getting user data
        const {data} = await axios.post(
            '/api/users/',
            {name,email,description,password},
            config
        )
        
        //Setting user data into the local cache 
        localStorage.setItem('userDetails',JSON.stringify(data))

        //If the data is fetched properly then the login is success and the data is assigned to the payload
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: data
        })

    } catch (error) {
        //Accessing the error and initiating the login error action and assigning the error as a payload
        dispatch({
            type: SIGNUP_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        })
    }
}

export const logout = () => async(dispatch) => {
    localStorage.removeItem('userDetails')
    dispatch({
        type: LOGOUT
    })
}

export const deleteUser = async(dispatch,getState) => {
    try {
        //The login action is initiated and the action is dispatched here
        dispatch({
            type: DELETE_USER_INIT
        })

        const {
            login:{userDetails}
        } = getState()

        //Config for the post to api
        const config = {
            headers:{
                'Content-type':'application/json',
                'x-auth':userDetails.token
            }
        }

        //Handling the post action and getting user data
        const data = await axios.delete(`/api/users/${userDetails.user.id}`,config)
        localStorage.removeItem('userDetails')
        
        //If the data is fetched properly then the login is success and the data is assigned to the payload
        dispatch({
            type: DELETE_USER_SUCCESS,
        })

    } catch (error) {
        //Accessing the error and initiating the login error action and assigning the error as a payload
        dispatch({
            type: DELETE_USER_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        })
    }
}

export const updateUser = (name,description) => async(dispatch,getState) => {
    try {
        //The login action is initiated and the action is dispatched here
        dispatch({
            type: EDIT_USER_INIT
        })

        const {
            login:{userDetails}
        } = getState()

        //Config for the post to api
        const config = {
            headers:{
                'Content-type':'application/json',
                'x-auth':userDetails.token
            }
        }

        //Handling the post action and getting user data
        const {data} = await axios.post(`/api/users/${userDetails.user.id}`,{name,description},config)
        
        //If the data is fetched properly then the login is success and the data is assigned to the payload
        dispatch({
            type: EDIT_USER_SUCCESS,
            payload: data
        })

    } catch (error) {
        //Accessing the error and initiating the login error action and assigning the error as a payload
        dispatch({
            type: EDIT_USER_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        })
    }
}