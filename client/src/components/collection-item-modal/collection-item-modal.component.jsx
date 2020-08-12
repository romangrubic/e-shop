import React from 'react';
import './collection-item-modal.styles.scss';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import SizeChoices from '../size-choices/size-choices.component';
import { createStructuredSelector } from 'reselect';
import { selectSize } from '../../redux/cart/cart.selector';

const CollectionItemModal = ({
    open,
    onClose,
    item,
    addItem,
    category,
    size,
    // setSize,
}) => {
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit ullam, inventore aut debitis, voluptatum repellat
                    incidunt nulla ex alias cum dicta odit impedit saepe dolorem
                    explicabo rem laborum, nobis est.
                </p>
                <h2 className='text-center'>{price} €</h2>
                <SizeChoices category={category} />
                <button
                    className='add-button'
                    onClick={() => {
                        addItem({ ...item, size });
                        onClose();
                    }}
                >
                    ADD TO CART
                </button>
            </div>
        </>
    );
};

const mapStateToProps = createStructuredSelector({
    size: selectSize,
});

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
    // setSize: (size) => dispatch(setSize(size)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CollectionItemModal);
