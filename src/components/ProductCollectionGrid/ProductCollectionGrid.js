import React, { useContext } from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';
import { LanguageContext } from '../../context/LanguageContext';

const ProductCollectionGrid = (props) => {
  const { t } = useContext(LanguageContext);

  return (
    <div className={styles.root}>
      <ProductCollection
        image={'/collections/collection1.jpg'}
        title={t('menu.boy')}
        text={t('collection.more')}
        link={'/boy'}
      />
      <ProductCollection
        image={'/collections/collection2.jpg'}
        title={t('menu.girl')}
        text={t('collection.more')}
        link={'/girl'}
      />
      <ProductCollection
        image={'/collections/collection3.jpg'}
        title={t('menu.cakeSmash')}
        text={t('collection.more')}
        link={'/cakesmash'}
      />
      <ProductCollection
        image={'/collections/collection4.jpg'}
        title={t('menu.seasonal')}
        text={t('collection.more')}
        link={'/seasonal'}
      />
    </div>
  );
};

export default ProductCollectionGrid;
