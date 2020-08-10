import React from 'react';
import './collection-item-modal.styles.scss';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItemModal = ({ open, onClose, item, addItem }) => {
    const { name, price, imageUrl } = item;

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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eum earum, eaque consectetur nemo id placeat vitae. Ipsam
                    harum nihil, consequatur, totam ea neque veniam, alias enim
                    sed nostrum consequuntur omnis.
                </p>
                <h2 className='text-center'>{price} €</h2>
                {/* SIZE CHOICES */}
                <button className='add-button' onClick={() => addItem(item)}>
                    ADD TO CART
                </button>
            </div>
        </>
    );
};

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItemModal);
