import axios from 'axios'
import{
    CREATE_POST_FAIL,
    CREATE_POST_INIT, CREATE_POST_SUCCESS, DELETE_POST_FAIL, DELETE_POST_INIT, DELETE_POST_SUCCESS, GET_ALL_POSTS_FAIL, GET_ALL_POSTS_INIT, GET_ALL_POSTS_SUCCESS, GET_POST_FAIL, GET_POST_INIT, GET_POST_SUCCESS, GET_USER_POSTS_FAIL, GET_USER_POSTS_INIT, GET_USER_POSTS_SUCCESS, LIKE_POST_FAIL, LIKE_POST_INIT, LIKE_POST_SUCCESS, UNLIKE_POST_FAIL, UNLIKE_POST_INIT, UNLIKE_POST_SUCCESS, UPDATE_POST_FAIL, UPDATE_POST_INIT, UPDATE_POST_SUCCESS
}
from '../constants/postConstants'

export const createPost = (title,body, baseImage) => async(dispatch,getState) =>{
    try{
        dispatch({
            type: CREATE_POST_INIT
        })

        const {
            login:{userDetails}
        } = getState()

        const config = {
            headers:{
                'Content-type':'application/json',
                'x-auth': userDetails.token
            }
        }

        const {data} = await axios.post('/api/posts',{title,body, baseImage },config)

        dispatch({
            type: CREATE_POST_SUCCESS,
            payload: data
        })
    }
    catch(error){
        //Accessing the error and initiating the login error action and assigning the error as a payload
        dispatch({
            type: CREATE_POST_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        })
    }
}

export const updatePost= (id,title,body) => async(dispatch) => {
    try {
        dispatch({
            type: UPDATE_POST_INIT
        })

        const {data} = await axios.post(`/api/posts/${id}`,{title,body})

        dispatch({
            type: UPDATE_POST_SUCCESS,
            payload: data
        })
    } catch (error) {
        //Accessing the error and initiating the login error action and assigning the error as a payload
        dispatch({
            type: UPDATE_POST_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        })
    }
}

export const getUserPosts = (id) => async(dispatch,getState) => {
    try {
        dispatch({
            type: GET_USER_POSTS_INIT
        })

        const {
            login:{userDetails}
        } = getState()

        const config = {
            headers:{
                'Content-type':'application/json',
            }
        }

        const {data} = await axios.get(`/api/posts/individual/${id}`,config)

        dispatch({
            type: GET_USER_POSTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        //Accessing the error and initiating the login error action and assigning the error as a payload
        dispatch({
            type: GET_USER_POSTS_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        })
    }
}

export const deletePost = (id) => async(dispatch,getState) => {
    try {
        dispatch({
            type: DELETE_POST_INIT
        })

        const {
            login:{userDetails}
        } = getState()

        const config = {
            headers:{
                'Content-type':'application/json',
                'x-auth': userDetails.token
            }
        }

        const {data} = axios.delete(`/api/posts/${id}`,config)

        dispatch({
            type: DELETE_POST_SUCCESS,
            payload: data
        })
    } catch (error) {
        //Accessing the error and initiating the login error action and assigning the error as a payload
        dispatch({
            type: DELETE_POST_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        })
    }
}

export const getPost = (id) => async(dispatch,getState) =>{
    try {
        dispatch({
            type: GET_POST_INIT
        })

        const {
            login:{userDetails}
        } = getState()

        const config = {
            headers:{
                'Content-type':'application/json',
                'x-auth': userDetails.token
            }
        }

        const {data} = await axios.get(`/api/posts/${id}`,config)

        dispatch({
            type: GET_POST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_POST_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        })
    }
}

export const getAllPosts = () => async(dispatch,getState) =>{
    try {
        dispatch({
            type: GET_ALL_POSTS_INIT
        })

        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }

        const {data} = await axios.get('/api/posts', config)

        dispatch({
            type: GET_ALL_POSTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_ALL_POSTS_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        })
    }
}

export const likePost = (id) => async(dispatch,getState) =>{
    try {
        dispatch({
            type: LIKE_POST_INIT
        })

        const {
            login:{userDetails}
        } = getState()

        const config = {
            headers:{
                'Content-type':'application/json',
                'x-auth': userDetails.token
            }
        }

        //Important thing to notice is to pass an empty object

        const {data} = await axios.post(`/api/posts/like/${id}`,{},config)

        dispatch({
            type: LIKE_POST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LIKE_POST_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        })
    }
}

export const unlikePost = (id) => async(dispatch,getState) =>{
    try {
        dispatch({
            type: UNLIKE_POST_INIT
        })

        const {
            login:{userDetails}
        } = getState()

        const config = {
            headers:{
                'Content-type':'application/json',
                'x-auth': userDetails.token
            }
        }
        
        //Important thing to notice is to pass an empty object
        const {data} = await axios.post(`/api/posts/unlike/${id}`,{},config)

        dispatch({
            type: UNLIKE_POST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: UNLIKE_POST_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        })
    }
}