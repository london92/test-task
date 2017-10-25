import { combineReducers } from 'redux';

import FormReducer from './FormReducer';


export default combineReducers({
    registerForm: FormReducer
})
