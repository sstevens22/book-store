import { combineReducers, createStore } from "redux";
import reducers from './ducks/reducers';


const store = createStore(reducers);

export default store;