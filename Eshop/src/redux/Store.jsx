import {createStore , applyMiddleWare} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer'


const initialState = []
const meddleware = [thunk]

const store = createStore(rootReducer , initialState ,applyMiddleWare(...meddleware))