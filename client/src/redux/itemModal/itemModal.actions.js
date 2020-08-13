import { ItemModalActionTypes } from './itemModal.types';

export const disableAddButton = () => ({
    type: ItemModalActionTypes.DISABLE_ADD_BUTTON,
});

export const enableAddButton = () => ({
    type: ItemModalActionTypes.ENABLE_ADD_BUTTON,
});
