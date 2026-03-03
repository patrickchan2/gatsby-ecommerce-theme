import { Link, navigate } from 'gatsby';
import React, { useContext } from 'react';

import Button from '../Button';
import CurrencyFormatter from '../CurrencyFormatter';
import MiniCartItem from '../MiniCartItem';
import { CartContext } from '../../context/CartContext';

import * as styles from './MiniCart.module.css';

const MiniCart = (props) => {
  const { items, removeFromCart, updateQuantity } = useContext(CartContext);
  const total = items.reduce((sum, item) => sum + (item.price ?? 0) * (item.quantity ?? 1), 0);

  return (
    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <h4>My Bag</h4>
      </div>
      <div className={styles.cartItemsContainer}>
        {items.length === 0 ? (
          <p className={styles.emptyMessage}>Your bag is empty.</p>
        ) : (
          items.map((item) => (
            <MiniCartItem
              key={item.id}
              id={item.id}
              image={item.image}
              alt={item.alt}
              name={item.name}
              price={item.price}
              color={item.color}
              size={item.size}
              quantity={item.quantity}
              onRemove={removeFromCart}
              onQuantityChange={(qty) => updateQuantity(item.id, qty)}
            />
          ))
        )}
      </div>
      <div className={styles.summaryContainer}>
        <div className={styles.summaryContent}>
          <div className={styles.totalContainer}>
            <span>Total (USD)</span>
            <span>
              <CurrencyFormatter amount={total} appendZero />
            </span>
          </div>
          <span className={styles.taxNotes}>
            Taxes and shipping will be calculated at checkout
          </span>
          <Button onClick={() => navigate('/cart')} level={'primary'} fullWidth>
            checkout
          </Button>
          <div className={styles.linkContainer}>
            <Link to={'/shop'}>continue shopping</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCart;
