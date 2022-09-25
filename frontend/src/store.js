import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {
    loginReducer,
    signupReducer,
    getUserDetailsReducer,
    deleteUserReducer,
    updateUserReducer,
} from './reducers/userReducers'

import{
    createPostReducer,
    getPostReducer,
    getUserPostsReducer,
    getAllPostsReducer,
    updatePostReducer,
    deletePostReducer,
    likePostReducer,
    unlikePostReducer
}   from './reducers/postReducers'

import{
    getCommentsReducer,
    createCommentReducer,
    updateCommentReducer,
    deleteCommentReducer,
    likeCommentReducer,
    unlikeCommentReducer
} from './reducers/commentReducer'

const reducers = combineReducers({
    login: loginReducer,
    signup: signupReducer,
    userDelete: deleteUserReducer,
    userUpdate: updateUserReducer,
    userDetailsGet: getUserDetailsReducer,
    postCreate:createPostReducer,
    postGet:getPostReducer,
    postUpdate:updatePostReducer,
    postDelete:deletePostReducer,
    postLike:likePostReducer,
    postUnlike:unlikePostReducer,
    userPostsGet:getUserPostsReducer,
    allPostsGet:getAllPostsReducer,
    commentCreate:createCommentReducer,
    commentUpdate:updateCommentReducer,
    commentDelete:deleteCommentReducer,
    commentLike:likeCommentReducer,
    commentUnlike:unlikeCommentReducer,
    commentsGet:getCommentsReducer
})

const middleware = [thunk]

const userDetailsFromStorage = localStorage.getItem('userDetails')?JSON.parse(localStorage.getItem('userDetails')):""
const authStateFromStorage = userDetailsFromStorage.token&&true

const initialState = {
    login:{
        success: authStateFromStorage,
        userDetails: userDetailsFromStorage
    },
}

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
)

export default store