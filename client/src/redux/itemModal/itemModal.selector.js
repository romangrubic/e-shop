import { createSelector } from 'reselect';

const selectItemModal = (state) => state.itemModal;

// Selector for Item add
export const selectIsDisabled = createSelector(
    [selectItemModal],
    (itemModal) => itemModal.disabledButton
);
