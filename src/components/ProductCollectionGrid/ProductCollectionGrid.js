import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={'/collections/collection1.jpg'}
        title={'Boy'}
        text={'BOOK NOW'}
        link={'/boy'}
      />
      <ProductCollection
        image={'/collections/collection2.jpg'}
        title={'Girl'}
        text={'BOOK NOW'}
        link={'/girl'}
      />
      <ProductCollection
        image={'/collections/collection3.jpg'}
        title={'Cake Smash'}
        text={'BOOK NOW'}
        link={'/cakesmash'}
      />
      <ProductCollection
        image={'/collections/collection4.jpg'}
        title={'Seasonal'}
        text={'BOOK NOW'}
        link={'/seasonal'}
      />
    </div>
  );
};

export default ProductCollectionGrid;
