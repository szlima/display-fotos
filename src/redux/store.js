import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import indexReducer from './reducers/indexReducer';

const store= createStore(indexReducer, {}, applyMiddleware(ReduxThunk));
export default store;