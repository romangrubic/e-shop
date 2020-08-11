import React, { useState } from 'react';
import './collection-item-modal.styles.scss';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItemModal = ({ open, onClose, item, addItem, category }) => {
    const { name, price, imageUrl } = item;

    const [size, setSize] = useState('Medium');

    // if (category == 'Sneakers') {
    //     // console.log(category);
    //     return (sneakers = <button>Sneakers</button>);
    // } else {
    //     button = <button></button>;
    // }

    if (!open) return null;
    return (
        <>
            <div onClick={onClose} className='overlay-styles' />
            <div className='modal-styles'>
                <p className='close-icon' onClick={onClose}>
                    &#10006;
                </p>
                <div
                    className='image'
                    style={{ backgroundImage: `url(${imageUrl})` }}
                />
                <h1 className='text-center'>{name}</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit ullam, inventore aut debitis, voluptatum repellat
                    incidunt nulla ex alias cum dicta odit impedit saepe dolorem
                    explicabo rem laborum, nobis est.
                </p>
                <h2 className='text-center'>{price} €</h2>
                {/* SIZE CHOICES new component which renders choices based on */}
                {/* <Choices category={category} size={size} /> */}
                <div className='center-buttons'>
                    <button
                        className='choice-button'
                        onClick={() => setSize('Small')}
                    >
                        S
                    </button>
                    <button
                        className='choice-button'
                        onClick={() => setSize('Medium')}
                    >
                        M
                    </button>
                    <button
                        className='choice-button'
                        onClick={() => setSize('Large')}
                    >
                        L
                    </button>
                </div>
                <button
                    className='add-button'
                    onClick={() => addItem({ ...item, size })}
                >
                    ADD TO CART
                </button>
            </div>
        </>
    );
};

// function Choices({ category, size }) {
//     const [size, setSize] = useState('Medium');

//     if (category === 'Sneakers') {
//         return <button>Sneakers</button>;
//     }
// }

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItemModal);
