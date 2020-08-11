import React, { useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss';
import CollectionItemModal from '../collection-item-modal/collection-item-modal.component';

const CollectionItem = ({ item, category }) => {
    const [itemModalOpen, setItemModalOpen] = useState(false);

    const { name, price, imageUrl } = item;
    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={() => setItemModalOpen(true)} inverted>
                Click to view!
            </CustomButton>
            <CollectionItemModal
                item={item}
                category={category}
                open={itemModalOpen}
                onClose={() => setItemModalOpen(false)}
            />
        </div>
    );
};

export default CollectionItem;
