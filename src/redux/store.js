import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root-reducer';
import { composeWithDevTools, devToolsEnhancer } from "redux-devtools-extension";


const store = createStore(rootReducer, devToolsEnhancer() );

export default store;