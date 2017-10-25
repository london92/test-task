import { FORM_UPDATE, FORM_SUBMIT } from '../actions/types';

const INITIAL_STATE = { name: '', street: '', postIndex: '', place: '', country: '', person_name: '',
    person_surname: '', email: '', telephone: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case FORM_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case FORM_SUBMIT:
            return INITIAL_STATE;
        default:
            return state;
    }
}
