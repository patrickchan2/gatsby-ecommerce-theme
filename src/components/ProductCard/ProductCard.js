import React, { useState } from 'react';
import { navigate } from 'gatsby';
import * as styles from './ProductCard.module.css';

import Icon from '../Icons/Icon';
import CurrencyFormatter from '../CurrencyFormatter';
import { toOptimizedImage } from '../../helpers/general';

const ProductCard = (props) => {
  const [isWishlist, setIsWishlist] = useState(false);
  const {
    image,
    imageAlt,
    name,
    price,
    originalPrice,
    meta,
    showQuickView,
    height = 580,
    showPrice = true,
    link,
  } = props;

  const handleRouteToProduct = () => {
    if (link) {
      const isFile = /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(link);

      if (isFile) {
        window.location.href = link;
        return;
      }

      // For any absolute/external links open via location, otherwise use Gatsby navigation
      const isExternal = /^(?:[a-z]+:)?\/\//i.test(link);

      if (isExternal) {
        window.location.href = link;
        return;
      }

      navigate(link);
      return;
    }

    const slug = name
      ? name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '')
      : 'sample';

    navigate(`/product/${slug}`);
  };

  const handleQuickView = (e) => {
    e.stopPropagation();
    showQuickView();
  };

  const handleFavorite = (e) => {
    e.stopPropagation();
    setIsWishlist(!isWishlist);
  };

  return (
    <div className={styles.root}>
      <div
        className={styles.imageContainer}
        onClick={() => handleRouteToProduct()}
        role={'presentation'}
      >
        <img style={{ height: `${height}px` }} src={toOptimizedImage(image)} alt={imageAlt}></img>
        <div
          className={styles.bagContainer}
          role={'presentation'}
          onClick={(e) => handleQuickView(e)}
        >
          <Icon symbol={'bagPlus'} />
        </div>
        <div
          className={styles.heartContainer}
          role={'presentation'}
          onClick={(e) => handleFavorite(e)}
        >
          <Icon symbol={'heart'} />
          <div
            className={`${styles.heartFillContainer} ${
              isWishlist === true ? styles.show : styles.hide
            }`}
          >
            <Icon symbol={'heartFill'}></Icon>
          </div>
        </div>
      </div>
      <div className={styles.detailsContainer}>
        <span className={styles.productName}>{name}</span>
        {showPrice && (
          <div className={styles.prices}>
            <span
              className={`${originalPrice !== undefined ? styles.salePrice : ''}`}
            >
              <CurrencyFormatter amount={price} useDollar />
            </span>
            {originalPrice && (
              <span className={styles.originalPrice}>
                <CurrencyFormatter amount={originalPrice} useDollar />
              </span>
            )}
          </div>
        )}
        <span className={styles.meta}>{meta}</span>
      </div>
    </div>
  );
};

export default ProductCard;
