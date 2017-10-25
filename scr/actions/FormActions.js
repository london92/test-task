import { FORM_UPDATE, FORM_SUBMIT } from './types';

export const formUpdate = ({ prop, value }) => {
    return {
        type: FORM_UPDATE,
        payload: { prop, value }
    }
};

export const formSubmit = () => {
    return {
        type: FORM_SUBMIT
    }
};

