import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { useDispatch } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(rootReducer, composeWithDevTools());

export default store;