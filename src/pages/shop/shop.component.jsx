import React from 'react';
import CollectionPreview from '../../components/prewiev-collection/collection-preview.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selector';

const Shop = ({ collections }) => {
    return (
        <div className='shop-page'>
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollections,
});

export default connect(mapStateToProps)(Shop);
