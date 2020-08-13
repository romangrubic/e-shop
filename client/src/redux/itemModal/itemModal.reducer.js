import { ItemModalActionTypes } from './itemModal.types';

const INITIAL_STATE = {
    disabledButton: true,
};

const itemModalReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ItemModalActionTypes.DISABLE_ADD_BUTTON:
            return { ...state, disabledButton: true };
        case ItemModalActionTypes.ENABLE_ADD_BUTTON:
            return { ...state, disabledButton: false };
        default:
            return state;
    }
};

export default itemModalReducer;
