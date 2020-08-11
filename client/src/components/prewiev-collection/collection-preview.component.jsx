import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';
import { withRouter } from 'react-router-dom';

const CollectionPreview = ({ title, items, history, match, routeName }) => {
    return (
        <div className='collection-preview'>
            <h1
                className='title'
                onClick={() => history.push(`${match.path}/${routeName}`)}
            >
                {title}
            </h1>
            <div className='preview'>
                {items.slice(0, 4).map((item) => (
                    <CollectionItem
                        key={item.id}
                        item={item}
                        category={title}
                    />
                ))}
            </div>
        </div>
    );
};

export default withRouter(CollectionPreview);
