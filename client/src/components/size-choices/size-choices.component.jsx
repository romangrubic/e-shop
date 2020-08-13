import React from 'react';
import './size-choices.styles.scss';
import { setSize } from '../../redux/cart/cart.actions';
import { enableAddButton } from '../../redux/itemModal/itemModal.actions';
import { connect } from 'react-redux';

const SizeChoices = ({ category, setSize, enableAddButton }) => {
    let sizeChoices = ['Small', 'Medium', 'Large'];

    if (category === 'Sneakers') sizeChoices = [6, 6.5, 7, 7.5, 8, 8.5, 9];
    if (category === 'Hats') sizeChoices = ['Fits all'];

    return (
        <div className='center-buttons'>
            {sizeChoices.map((size) => (
                <button
                    key={size}
                    className='choice-button'
                    onClick={() => {
                        setSize(`${size}`);
                        enableAddButton();
                    }}
                >
                    {size}
                </button>
            ))}
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    setSize: (size) => dispatch(setSize(size)),
    enableAddButton: () => dispatch(enableAddButton()),
});

export default connect(null, mapDispatchToProps)(SizeChoices);
