import {createStore, applyMiddleware} from 'redux';
import Reducers from './reducers'
import thunk from 'redux-thunk'

/*
const store = createStore(Reducers, applyMiddleware(thunk));
export default store;
*/

 
export default function() {
    let store = createStore(Reducers, applyMiddleware(thunk))
    return store
}
