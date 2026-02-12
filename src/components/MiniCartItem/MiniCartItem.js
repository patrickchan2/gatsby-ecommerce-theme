import React from 'react';

import { navigate } from 'gatsby';
import AdjustItem from '../AdjustItem';
import CurrencyFormatter from '../CurrencyFormatter';
import RemoveItem from '../RemoveItem';

import * as styles from './MiniCartItem.module.css';
import { toOptimizedImage } from '../../helpers/general';

const MiniCartItem = (props) => {
  const { id, image, alt, name, price, color, size, quantity = 1, onRemove, onQuantityChange } = props;
  const lineTotal = (price ?? 0) * (quantity ?? 1);

  return (
    <div className={styles.root}>
      <div
        className={styles.imageContainer}
        role={'presentation'}
        onClick={() => navigate('/product/sample')}
      >
        <img src={toOptimizedImage(image)} alt={alt} />
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.metaContainer}>
          <span className={styles.name}>{name}</span>
          <div className={styles.priceContainer}>
            <CurrencyFormatter amount={lineTotal} />
          </div>
          <span className={styles.meta}>Color: {color}</span>
          <span className={styles.meta}>
            Size:
            <span className={styles.size}>{size}</span>
          </span>
        </div>
        <div className={styles.adjustItemContainer}>
          <AdjustItem
            quantity={quantity}
            onQuantityChange={onQuantityChange}
          />
        </div>
      </div>
      <div className={styles.closeContainer}>
        <RemoveItem onClick={() => onRemove?.(id)} />
      </div>
    </div>
  );
};

export default MiniCartItem;
