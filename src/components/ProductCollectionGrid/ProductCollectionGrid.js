import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={'/collections/collection1.jpg'}
        title={'Boy'}
        text={'more'}
        link={'/boy'}
      />
      <ProductCollection
        image={'/collections/collection2.jpg'}
        title={'Girl'}
        text={'more'}
        link={'/girl'}
      />
      <ProductCollection
        image={'/collections/collection3.jpg'}
        title={'Cake Smash'}
        text={'more'}
        link={'/cakesmash'}
      />
      <ProductCollection
        image={'/collections/collection4.jpg'}
        title={'Seasonal'}
        text={'more'}
        link={'/seasonal'}
      />
    </div>
  );
};

export default ProductCollectionGrid;
