import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'


const reducers = combineReducers({

})

const middleware = [thunk]

const userDetailsFromStorage = localStorage.getItem('userDetails')?JSON.parse(localStorage.getItem('userDetails')):""
const authStateFromStorage = userDetailsFromStorage.token&&true

const initialState = {

}

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
)

export default store