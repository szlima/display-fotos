import {combineReducers} from 'redux';

import fotoReducer from './fotoReducer';
import albunsReducer from './albunsReducer';

export default combineReducers({
    fotoReducer,
    albunsReducer
});