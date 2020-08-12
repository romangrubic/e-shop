import React from 'react';
import './size-choices.styles.scss';
import { setSize, enableAddButton } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const SizeChoices = ({ category, setSize, enableAddButton }) => {
    let sizeChoices = ['Small', 'Medium', 'Large'];

    if (category === 'Sneakers') sizeChoices = [6, 6.5, 7, 7.5, 8, 8.5, 9];
    if (category === 'Hats') sizeChoices = ['Fits all'];
    if (category === 'Womens')
        sizeChoices = ['S (6-8)', 'M (10-12)', 'L (14-16)'];
    if (category === 'Mens')
        sizeChoices = ['S (36)', 'M (38)', 'L (40)', 'XL (42)'];

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
