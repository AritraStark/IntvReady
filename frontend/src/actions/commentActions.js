import axios from 'axios'
import { CREATE_COMMENT_FAIL, CREATE_COMMENT_INIT, CREATE_COMMENT_SUCCESS, DELETE_COMMENT_FAIL, DELETE_COMMENT_INIT, DELETE_COMMENT_SUCCESS, GET_COMMENTS_FAIL, GET_COMMENTS_INIT, GET_COMMENTS_SUCCESS, LIKE_COMMENT_FAIL, LIKE_COMMENT_INIT, LIKE_COMMENT_SUCCESS, UNLIKE_COMMENT_FAIL, UNLIKE_COMMENT_INIT, UNLIKE_COMMENT_SUCCESS, UPDATE_COMMENT_FAIL, UPDATE_COMMENT_INIT, UPDATE_COMMENT_SUCCESS, } from '../constants/commentConstants'

export const createComment = (post_id,text) => async(dispatch,getState) => {
    try {
        dispatch({
            type: CREATE_COMMENT_INIT
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

        const {data} = await axios.post(`/api/comments/${post_id}`,{text},config)
        

        dispatch({
            type: CREATE_COMMENT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CREATE_COMMENT_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        })
    }
}

export const updateComment = (id,body) => async(dispatch) => {
    try {
        dispatch({
            type: UPDATE_COMMENT_INIT
        })

        const {data} = await axios.post(`/api/comments/${id}`,{body})

        dispatch({
            type: UPDATE_COMMENT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: UPDATE_COMMENT_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        })
    }
}

export const deleteComment = (id) => async(dispatch,getState) => {
    try {
        dispatch({
            type: DELETE_COMMENT_INIT
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

        const {data} = await axios.delete(`/api/comments/${id}`,config)

        dispatch({
            type: DELETE_COMMENT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: DELETE_COMMENT_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        })
    }
}

export const getComments = (id) => async(dispatch,getState) => {
    try {
        dispatch({
            type: GET_COMMENTS_INIT
        })


        const config = {
            headers:{
                'Content-type':'application/json',
            }
        }

        const {data} = await axios.get(`/api/comments/${id}`,config)

        dispatch({
            type: GET_COMMENTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_COMMENTS_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        })
    }
}

export const likeComment = (id) => async(dispatch,getState) =>{
    try {
        dispatch({
            type: LIKE_COMMENT_INIT
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

        const {data} = await axios.post(`/api/comments/like/${id}`, {}, config)

        dispatch({
            type: LIKE_COMMENT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LIKE_COMMENT_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        })
    }
}

export const unlikeComment = (id) => async(dispatch,getState) =>{
    try {
        dispatch({
            type: UNLIKE_COMMENT_INIT
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

        const {data} = await axios.post(`/api/comments/unlike/${id}`,{}, config)

        dispatch({
            type: UNLIKE_COMMENT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: UNLIKE_COMMENT_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        })
    }
}